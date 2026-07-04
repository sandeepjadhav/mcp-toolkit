import type { ToolContext } from "../../core/context/ToolContext.js";
import type { BaseTool } from "../index.js";
import type { ServiceDefinition } from "../service/ServiceDefinition.js";
export type ToolConstructor = new (context: ToolContext) => BaseTool<any, any>;
export interface PluginDefinition {
    /**
     * Plugin name.
     */
    name: string;
    /**
     * Plugin version.
     */
    version: string;
    /**
     * Optional description.
     */
    description?: string;
    /**
     * Optional author.
     */
    author?: string;
    /**
     * Services provided by this plugin.
     */
    services?: ServiceDefinition<any>[];
    /**
     * Tool classes provided by this plugin.
     */
    tools?: ToolConstructor[];
}
