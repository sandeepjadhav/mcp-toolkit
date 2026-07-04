import type { BaseTool } from "../tool/BaseTool.js";
import type { ServiceToken } from "../container/tokens.js";
import { ToolContext } from "../context/ToolContext.js";
import type { PluginDefinition } from "../plugin/PluginDefinition.js";
export interface McpApplicationOptions {
    name: string;
    version: string;
}
export declare class McpApplication {
    private readonly server;
    private readonly container;
    private readonly runtime;
    private readonly toolContext;
    private readonly toolRegistry;
    constructor(options: McpApplicationOptions);
    /**
     * Register a service.
     */
    registerService<T>(token: ServiceToken<T>, instance: T): void;
    /**
     * Register a tool.
     */
    registerTool(tool: BaseTool<any, any>): void;
    /**
     * Register multiple tools.
     */
    registerTools(tools: BaseTool<any, any>[]): void;
    /**
     * Shared ToolContext.
     */
    getToolContext(): ToolContext;
    /**
     * Load a plugin.
     */
    use(plugin: PluginDefinition): Promise<void>;
    /**
     * Start MCP Server.
     */
    start(): Promise<void>;
}
