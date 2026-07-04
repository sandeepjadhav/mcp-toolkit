import { BaseTool } from "../../../../core/src/public/index.js";
import { MongoServiceToken } from "../../providers/tokens.js";
export class MongoBaseTool extends BaseTool {
    mongo;
    constructor(context, definition) {
        super(context, definition);
        this.mongo =
            this.resolve(MongoServiceToken);
    }
}
