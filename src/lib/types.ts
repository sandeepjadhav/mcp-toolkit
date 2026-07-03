import { z } from "zod";

export type ToolSchema =
    Record<string, z.ZodTypeAny>;

export interface ToolMetadata {

    name: string;

    title: string;

    description: string;

}
export interface LoggerOptions {
  level?: "debug" | "info" | "warn" | "error";
}