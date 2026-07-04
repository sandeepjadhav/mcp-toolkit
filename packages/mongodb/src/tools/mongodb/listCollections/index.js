import { MongoBaseTool } from "../../abstract/MongoBaseTool.js";
import metadata from "./metadata.js";
export class ListCollectionsTool extends MongoBaseTool {
    constructor(context) {
        super(context, metadata);
    }
    async execute(_) {
        return this.mongo.listCollections();
    }
}
