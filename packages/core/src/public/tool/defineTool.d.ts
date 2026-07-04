import { z } from "zod";
import type { ToolDefinition } from "./ToolDefinition.js";
export declare function defineTool<TSchema extends z.ZodObject<any>>(definition: ToolDefinition<TSchema>): ToolDefinition<TSchema>;
