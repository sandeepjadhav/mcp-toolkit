import { MongoBaseTool } from "../../abstract/MongoBaseTool.js";
import metadata, { schema } from "./metadata.js";
import { ToolContext } from "@mcp-toolkit/core";
import { z } from "zod";



export class FindDocumentsTool extends MongoBaseTool<
  typeof schema
> {

  constructor(context: ToolContext) {
    super(context, metadata);
  }

  protected async execute(input: any) {

    return this.mongo.findDocuments(
      input.collection,
      {
        filter: input.filter,
        projection: input.projection,
        sort: input.sort,
        skip: input.skip,
        limit: input.limit
      }
    );

  }

}