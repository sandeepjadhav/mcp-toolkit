import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { Runtime } from "../runtime/Runtime.js";

/**
 * Context available to every tool.
 *
 * Keeps tools independent from McpApplication.
 */
export class ToolContext {
  constructor(
    public readonly server: McpServer,
    public readonly runtime: Runtime
  ) {}
}