import { BaseTool, type ToolMetadata } from "../../core/index.js";
import { ToolContext } from "../../core/context/ToolContext.js";
import { MongoService } from "../../services/MongoService.js";
import { MongoServiceToken } from "../../providers/tokens.js";
import { z } from "zod";

import type { ToolDefinition } from "../../core/tool/ToolDefinition.js";
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