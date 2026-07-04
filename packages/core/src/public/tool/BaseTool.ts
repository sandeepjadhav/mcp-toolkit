import { ToolError } from "./ToolError.js";
import { ToolResponse } from "./ToolResponse.js";
import { z, AnyZodObject } from "zod";
import type { ToolDefinition } from "./ToolDefinition.js";
import { ToolContext } from "../../internal/context/ToolContext.js";
import { ServiceToken } from "../../internal/container/tokens.js";



export abstract class BaseTool<
  TSchema extends AnyZodObject = AnyZodObject,
    TResult = unknown
> {

  protected constructor(
    protected readonly context: ToolContext,
    protected readonly definition: ToolDefinition<TSchema>
  ) {}

  protected resolve<T>(
    token: ServiceToken<T>
  ): T {

    return this.context.runtime.resolve(token);

  }

  protected abstract execute(
    input: z.infer<TSchema>
  ): Promise<TResult>;

  public register(): void {

    this.context.server.registerTool(

      this.definition.name,

      {

        title: this.definition.title,

        description: this.definition.description,

        inputSchema:
          this.definition.schema.shape

      },

      async (rawInput: unknown) => {

        try {

          const input =
            this.definition.schema.parse(rawInput);

          const result =
            await this.execute(input);

          if (
            result &&
            typeof result === "object" &&
            "content" in result
          ) {

            return result as any;

          }

          if (typeof result === "string") {

            return ToolResponse.text(result);

          }

          return ToolResponse.json(result);

        } catch (error) {

          return ToolError.from(error);

        }

      }

    );

  }

}