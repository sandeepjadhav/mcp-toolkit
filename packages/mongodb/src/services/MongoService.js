export class MongoService {
    db;
    constructor(db) {
        this.db = db;
    }
    async listCollections() {
        const collections = await this.db.listCollections().toArray();
        return collections.map(c => c.name);
    }
    async findDocuments(collection, options = {}) {
        const { filter = {}, projection, sort, skip = 0, limit = 100 } = options;
        let cursor = this.db
            .collection(collection)
            .find(filter);
        if (projection) {
            cursor = cursor.project(projection);
        }
        if (sort) {
            cursor = cursor.sort(sort);
        }
        cursor = cursor
            .skip(skip)
            .limit(limit);
        return cursor.toArray();
    }
    async insertDocument(collection, document) {
        const result = await this.db
            .collection(collection)
            .insertOne(document);
        return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId
        };
    }
    async updateMany(collection, filter, update) {
        return this.db
            .collection(collection)
            .updateMany(filter, {
            $set: update
        });
    }
    async deleteMany(collection, filter) {
        return this.db
            .collection(collection)
            .deleteMany(filter);
    }
    async countDocuments(collection, filter = {}) {
        return this.db
            .collection(collection)
            .countDocuments(filter);
    }
    async aggregate(collection, pipeline) {
        return this.db
            .collection(collection)
            .aggregate(pipeline)
            .toArray();
    }
}
