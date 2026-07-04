import { schema } from "./types.js";
import { defineTool } from "@mcp-toolkit/core";

export default defineTool({
  name: "mongodb_insert_document",
  title: "Insert MongoDB Document",
  description: "Insert a document.",
  schema,
  tags: [
    "mongodb",
    "write",
    "document"
  ],
  flags: {
    destructive: false
  }
});
