import { BaseTool } from "./BaseTool.js";
export declare class ToolRegistry {
    private readonly tools;
    register(tool: BaseTool): void;
    registerMany(tools: BaseTool[]): void;
    getAll(): BaseTool[];
    count(): number;
}
