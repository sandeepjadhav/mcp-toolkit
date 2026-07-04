import { ToolContext } from "../../../core/context/ToolContext.js";
import { MongoBaseTool } from "../../abstract/MongoBaseTool.js";
import metadata, { type ListCollectionsInput } from "./metadata.js";
export declare class ListCollectionsTool extends MongoBaseTool<typeof metadata.schema, string[]> {
    constructor(context: ToolContext);
    protected execute(_: ListCollectionsInput): Promise<string[]>;
}
