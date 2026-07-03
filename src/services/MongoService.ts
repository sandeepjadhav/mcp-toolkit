import { Db } from "mongodb";
import type { Document, Filter, OptionalId } from "mongodb";

import type { FindDocumentsOptions } from "./types/FindDocumentsOptions.js";

export class MongoService {

  constructor(
    private readonly db: Db
  ) { }

  async listCollections(): Promise<string[]> {

    const collections =
      await this.db.listCollections().toArray();

    return collections.map(c => c.name);

  }

  async findDocuments(
    collection: string,
    options: FindDocumentsOptions = {}
  ) {

    const {
      filter = {},
      projection,
      sort,
      skip = 0,
      limit = 100
    } = options;

    let cursor = this.db
      .collection(collection)
      .find(filter as Filter<Document>);

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

  public async insertDocument(
    collection: string,
    document: OptionalId<Document>
  ) {

    const result =
      await this.db
        .collection(collection)
        .insertOne(document);

    return {

      acknowledged: result.acknowledged,

      insertedId: result.insertedId

    };

  }

  async updateMany(
    collection: string,
    filter: Filter<Document>,
    update: Document
  ) {

    return this.db
      .collection(collection)
      .updateMany(filter, {
        $set: update
      });

  }

  async deleteMany(
    collection: string,
    filter: Filter<Document>
  ) {

    return this.db
      .collection(collection)
      .deleteMany(filter);

  }

  async countDocuments(
    collection: string,
    filter: Filter<Document> = {}
  ) {

    return this.db
      .collection(collection)
      .countDocuments(filter);

  }

  async aggregate(
    collection: string,
    pipeline: Document[]
  ) {

    return this.db
      .collection(collection)
      .aggregate(pipeline)
      .toArray();

  }

}