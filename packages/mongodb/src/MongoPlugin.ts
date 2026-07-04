
import { MongoServiceDefinition } from "./providers/index.js";
import { definePlugin } from "@mcp-toolkit/core";

import {mongoTools} from "./tools/index.js";

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
    tools: mongoTools

});

