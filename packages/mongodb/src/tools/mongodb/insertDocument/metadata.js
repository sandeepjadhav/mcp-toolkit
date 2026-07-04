import { defineTool } from "../../../../../core/src/public/index.js";
import { schema } from "./types.js";
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
