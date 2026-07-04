import { ToolContext } from "../context/ToolContext.js";
import type { ServiceToken } from "../container/tokens.js";
import { z } from "zod";
import type { ToolDefinition } from "./ToolDefinition.js";
export declare abstract class BaseTool<TSchema extends z.ZodObject<any>, TResult = unknown> {
    protected readonly context: ToolContext;
    protected readonly definition: ToolDefinition<TSchema>;
    protected constructor(context: ToolContext, definition: ToolDefinition<TSchema>);
    protected resolve<T>(token: ServiceToken<T>): T;
    protected abstract execute(input: z.infer<TSchema>): Promise<TResult>;
    register(): void;
}
