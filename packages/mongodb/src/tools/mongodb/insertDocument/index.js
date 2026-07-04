import metadata from "./metadata.js";
import { MongoBaseTool } from "../../abstract/MongoBaseTool.js";
export class InsertDocumentTool extends MongoBaseTool {
    constructor(context) {
        super(context, metadata);
    }
    async execute(input) {
        return this.mongo.insertDocument(input.collection, input.document);
    }
}
