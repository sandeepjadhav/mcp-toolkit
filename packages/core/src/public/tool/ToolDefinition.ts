import { AnyZodObject } from "zod";

export interface ToolFlags {
  destructive?: boolean;
  experimental?: boolean;
  deprecated?: boolean;
}

export interface ToolDefinition<TSchema extends AnyZodObject = AnyZodObject> {
  name: string;
  title: string;
  description: string;
  schema: TSchema;
  tags?: string[];
  flags?: ToolFlags;
}

