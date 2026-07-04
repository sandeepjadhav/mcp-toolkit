import { ToolContext } from "../../../core/context/ToolContext.js";
import { MongoBaseTool } from "../../abstract/MongoBaseTool.js";
import type { FindDocumentsInput } from "./metadata.js";
export declare class FindDocumentsTool extends MongoBaseTool<FindDocumentsInput> {
    constructor(context: ToolContext);
    protected execute(input: FindDocumentsInput): Promise<import("mongodb").WithId<import("bson").Document>[]>;
}
