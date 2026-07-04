import metadata from "./metadata.js";
import type { InsertDocumentInput } from "./types.js";
import { ToolContext } from "../../../core/context/ToolContext.js";
import { MongoBaseTool } from "../../abstract/MongoBaseTool.js";
export declare class InsertDocumentTool extends MongoBaseTool<typeof metadata.schema, {
    acknowledged: boolean;
    insertedId: unknown;
}> {
    constructor(context: ToolContext);
    protected execute(input: InsertDocumentInput): Promise<{
        acknowledged: boolean;
        insertedId: import("bson").ObjectId;
    }>;
}
