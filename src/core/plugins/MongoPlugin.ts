
import { ListCollectionsTool } from "../../tools/mongodb/listCollections/index.js";
import { FindDocumentsTool } from "../../tools/mongodb/findDocuments/index.js";
import { InsertDocumentTool } from "../../tools/mongodb/insertDocument/index.js";
import { definePlugin } from "./definePlugin.js";
import MongoServiceDefinition from "../../providers/mongodb.service.js";

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

