import { z } from "zod";
import { defineTool } from "../../../lib/index.js";

export const schema = z.object({});

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
