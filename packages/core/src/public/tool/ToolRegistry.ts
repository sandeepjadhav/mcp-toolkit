import { ZodTypeAny } from "zod";
import { BaseTool } from "./BaseTool.js";

export class ToolRegistry {
  private readonly tools: BaseTool[] = [];

  register(tool: BaseTool): void {
    this.tools.push(tool);
    tool.register();
  }

  registerMany(tools: BaseTool[]): void {
    for (const tool of tools) {
      this.register(tool);
    }
  }

  getAll(): BaseTool[] {
    return [...this.tools];
  }

  count(): number {
    return this.tools.length;
  }
}