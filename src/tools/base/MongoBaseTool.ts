import { BaseTool, type ToolMetadata } from "../../lib/index.js";
import { ToolContext } from "../../lib/context/ToolContext.js";
import { MongoService } from "../../services/MongoService.js";
import { MongoServiceToken } from "../../config/tokens.js";

 import { z } from "zod";



import type { ToolDefinition } from "../../lib/tool/ToolDefinition.js";



export abstract class MongoBaseTool<
  TSchema extends z.ZodObject<any>,
  TResult = unknown
> extends BaseTool<TSchema, TResult> {

  protected readonly mongo: MongoService;

  protected constructor(
    context: ToolContext,
    definition: ToolDefinition<TSchema>
  ) {

    super(
      context,
      definition
    );

    this.mongo =
      this.resolve(
        MongoServiceToken
      );

  }

}