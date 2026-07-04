import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { ToolRegistry } from "../tool/ToolRegistry.js";
import type { BaseTool } from "../tool/BaseTool.js";
import { Container } from "../../internal/container/Container.js";
import type { ServiceToken } from "../../internal/container/tokens.js";
import { Runtime } from "../../internal/runtime/Runtime.js";
import { ToolContext } from "../../internal/context/ToolContext.js";

import type { PluginDefinition } from "../plugin/PluginDefinition.js";

export interface McpApplicationOptions {
  name: string;
  version: string;
}

export class McpApplication {
  private readonly server: McpServer;

  private readonly container: Container;

  private readonly runtime: Runtime;

  private readonly toolContext: ToolContext;

  private readonly toolRegistry: ToolRegistry;

  constructor(options: McpApplicationOptions) {
    this.server = new McpServer({
      name: options.name,
      version: options.version,
    });

    this.container = new Container();

    this.runtime = new Runtime(this.container);

    this.toolContext = new ToolContext(
      this.server,
      this.runtime
    );

    this.toolRegistry = new ToolRegistry();
  }

  /**
   * Register a service.
   */
  public registerService<T>(
    token: ServiceToken<T>,
    instance: T
  ): void {
    this.container.register(token, instance);
  }

  /**
   * Register a tool.
   */
  public registerTool(
    tool: BaseTool<any, any>
  ): void {
    this.toolRegistry.register(tool);
  }

  /**
   * Register multiple tools.
   */
  public registerTools(
    tools: BaseTool<any, any>[]
  ): void {
    this.toolRegistry.registerMany(tools);
  }

  /**
   * Shared ToolContext.
   */
  public getToolContext(): ToolContext {
    return this.toolContext;
  }

  /**
   * Load a plugin.
   */
  public async use(
    plugin: PluginDefinition
  ): Promise<void> {

    // Register Services
    if (plugin.services) {
      for (const service of plugin.services) {

        const instance =
          await service.create();

        this.registerService(
          service.token,
          instance
        );

      }
    }

    // Register Tools
    if (plugin.tools) {

      const tools = plugin.tools.map(
        Tool => new Tool(this.toolContext)
      );

      this.registerTools(tools);

    }

  }

  /**
   * Start MCP Server.
   */
  public async start(): Promise<void> {

    await this.server.connect(
      new StdioServerTransport()
    );

    console.log(
      "🚀 MCP Server Started"
    );

  }
}