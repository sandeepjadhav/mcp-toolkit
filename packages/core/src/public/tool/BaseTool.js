import { ToolError } from "./ToolError.js";
import { ToolResponse } from "./ToolResponse.js";
export class BaseTool {
    context;
    definition;
    constructor(context, definition) {
        this.context = context;
        this.definition = definition;
    }
    resolve(token) {
        return this.context.runtime.resolve(token);
    }
    register() {
        this.context.server.registerTool(this.definition.name, {
            title: this.definition.title,
            description: this.definition.description,
            inputSchema: this.definition.schema.shape
        }, async (rawInput) => {
            try {
                const input = this.definition.schema.parse(rawInput);
                const result = await this.execute(input);
                if (result &&
                    typeof result === "object" &&
                    "content" in result) {
                    return result;
                }
                if (typeof result === "string") {
                    return ToolResponse.text(result);
                }
                return ToolResponse.json(result);
            }
            catch (error) {
                return ToolError.from(error);
            }
        });
    }
}
