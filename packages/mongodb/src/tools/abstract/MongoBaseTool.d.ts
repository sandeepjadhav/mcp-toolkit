import { BaseTool } from "../../../../core/src/public/index.js";
import { ToolContext } from "../../core/context/ToolContext.js";
import { MongoService } from "../../services/MongoService.js";
import { z } from "zod";
import type { ToolDefinition } from "../../core/tool/ToolDefinition.js";
export declare abstract class MongoBaseTool<TSchema extends z.ZodObject<any>, TResult = unknown> extends BaseTool<TSchema, TResult> {
    protected readonly mongo: MongoService;
    protected constructor(context: ToolContext, definition: ToolDefinition<TSchema>);
}
