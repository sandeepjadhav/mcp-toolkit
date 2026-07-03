import { BaseTool } from "../tool/BaseTool.js";
import type { ServiceDefinition } from "../service/ServiceDefinition.js";
import { ToolContext } from "../context/ToolContext.js";

export type ToolConstructor = new (
  context: ToolContext
) => BaseTool<any, any>;

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