import { registerMongoTools } from "./mongodb/index.js";
// import { registerCalculatorTools } from "./calculator.js";
export function registerAllTools(server) {
    // registerCalculatorTools(server);
    registerMongoTools(server);
}
