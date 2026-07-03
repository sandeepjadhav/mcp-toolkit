import { z } from "zod";

export interface ToolFlags {
  destructive?: boolean;
  experimental?: boolean;
  deprecated?: boolean;
}

export interface ToolDefinition<
  TSchema extends z.AnyZodObject = z.AnyZodObject
> {
  name: string;
  title: string;
  description: string;
  schema: TSchema;
  tags?: string[];
  flags?: ToolFlags;
}