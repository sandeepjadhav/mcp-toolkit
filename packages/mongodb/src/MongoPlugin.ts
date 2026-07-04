
import { ListCollectionsTool } from "./tools/mongodb/listCollections/index.js";
import { FindDocumentsTool } from "./tools/mongodb/findDocuments/index.js";
import { InsertDocumentTool } from "./tools/mongodb/insertDocument/index.js";
import { MongoServiceDefinition } from "./providers/index.js";
import { definePlugin } from "@mcp-toolkit/core";


export default definePlugin({
    name: "mongodb",
    version: "1.0.0",
    description:
        "MongoDB MCP Plugin",
    author:
        "Sandeep Jadhav",
    services: [
        MongoServiceDefinition
    ],
    tools: [
        ListCollectionsTool,
        FindDocumentsTool,
        InsertDocumentTool
    ]

});

