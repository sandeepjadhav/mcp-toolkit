
import { defineTool } from "@mcp-toolkit/core";
import { z } from "zod";


export const schema = z.object({});

export type ListCollectionsInput =
  z.infer<typeof schema>;

export default defineTool({
  name: "mongodb_list_collections",
  title: "MongoDB Collections",
  description: "Lists all MongoDB collections.",
  schema,
  tags: [
    "mongodb",
    "read",
    "collection"
  ]
});