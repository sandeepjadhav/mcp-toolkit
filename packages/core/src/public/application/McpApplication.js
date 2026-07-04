import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Container } from "../container/Container.js";
import { ToolRegistry } from "../tool/ToolRegistry.js";
import { Runtime } from "../runtime/Runtime.js";
import { ToolContext } from "../context/ToolContext.js";
export class McpApplication {
    server;
    container;
    runtime;
    toolContext;
    toolRegistry;
    constructor(options) {
        this.server = new McpServer({
            name: options.name,
            version: options.version,
        });
        this.container = new Container();
        this.runtime = new Runtime(this.container);
        this.toolContext = new ToolContext(this.server, this.runtime);
        this.toolRegistry = new ToolRegistry();
    }
    /**
     * Register a service.
     */
    registerService(token, instance) {
        this.container.register(token, instance);
    }
    /**
     * Register a tool.
     */
    registerTool(tool) {
        this.toolRegistry.register(tool);
    }
    /**
     * Register multiple tools.
     */
    registerTools(tools) {
        this.toolRegistry.registerMany(tools);
    }
    /**
     * Shared ToolContext.
     */
    getToolContext() {
        return this.toolContext;
    }
    /**
     * Load a plugin.
     */
    async use(plugin) {
        // Register Services
        if (plugin.services) {
            for (const service of plugin.services) {
                const instance = await service.create();
                this.registerService(service.token, instance);
            }
        }
        // Register Tools
        if (plugin.tools) {
            const tools = plugin.tools.map(Tool => new Tool(this.toolContext));
            this.registerTools(tools);
        }
    }
    /**
     * Start MCP Server.
     */
    async start() {
        await this.server.connect(new StdioServerTransport());
        console.log("🚀 MCP Server Started");
    }
}
