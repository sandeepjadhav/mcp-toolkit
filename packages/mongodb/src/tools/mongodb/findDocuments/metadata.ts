import { z } from "zod";
import { defineTool } from "@mcp-toolkit/core";

export const schema = z.object({
  collection: z.string().describe("MongoDB collection name"),

  filter: z.record(z.any())
    .optional()
    .describe("MongoDB filter query"),

  projection: z.record(z.any())
    .optional()
    .describe("Fields to return"),

  sort: z.record(z.any())
    .optional()
    .describe("Sort order"),

  skip: z.number()
    .optional()
    .describe("Documents to skip"),

  limit: z.number()
    .optional()
    .describe("Maximum documents")
});

export type FindDocumentsInput = z.infer<typeof schema>;

export default defineTool({
  name: "mongodb_find_documents",
  title: "Find MongoDB Documents",
  description: "Find MongoDB documents.",
  schema,
  tags: [
    "mongodb",
    "read",
    "document"
  ]
});