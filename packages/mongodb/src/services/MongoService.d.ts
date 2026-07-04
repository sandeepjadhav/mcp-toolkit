import { Db } from "mongodb";
import type { Document, Filter, OptionalId } from "mongodb";
import type { FindDocumentsOptions } from "./types/FindDocumentsOptions.js";
export declare class MongoService {
    private readonly db;
    constructor(db: Db);
    listCollections(): Promise<string[]>;
    findDocuments(collection: string, options?: FindDocumentsOptions): Promise<import("mongodb").WithId<Document>[]>;
    insertDocument(collection: string, document: OptionalId<Document>): Promise<{
        acknowledged: boolean;
        insertedId: import("bson").ObjectId;
    }>;
    updateMany(collection: string, filter: Filter<Document>, update: Document): Promise<import("mongodb").UpdateResult<Document>>;
    deleteMany(collection: string, filter: Filter<Document>): Promise<import("mongodb").DeleteResult>;
    countDocuments(collection: string, filter?: Filter<Document>): Promise<number>;
    aggregate(collection: string, pipeline: Document[]): Promise<Document[]>;
}
