import { defineTool } from "../../../core/tool/defineTool.js";
import { z } from "zod";
export const schema = z.object({});
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
