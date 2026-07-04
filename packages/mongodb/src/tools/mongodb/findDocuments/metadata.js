import { z } from "zod";
import { defineTool } from "../../../../../core/src/public/index.js";
export const schema = z.object({});
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
