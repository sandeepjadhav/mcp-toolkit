import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerMongoTools } from "./mongodb/index.js";

// import { registerCalculatorTools } from "./calculator.js";

export function registerAllTools(server: McpServer) {

    // registerCalculatorTools(server);
    registerMongoTools(server);

}