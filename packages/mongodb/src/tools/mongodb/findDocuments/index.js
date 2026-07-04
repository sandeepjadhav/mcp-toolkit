import { MongoBaseTool } from "../../abstract/MongoBaseTool.js";
import metadata from "./metadata.js";
export class FindDocumentsTool extends MongoBaseTool {
    constructor(context) {
        super(context, metadata);
    }
    async execute(input) {
        return this.mongo.findDocuments(input.collection, {
            filter: input.filter,
            projection: input.projection,
            sort: input.sort,
            skip: input.skip,
            limit: input.limit
        });
    }
}
