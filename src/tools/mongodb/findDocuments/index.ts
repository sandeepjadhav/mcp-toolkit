import { ToolContext } from "../../../core/context/ToolContext.js";
import { MongoBaseTool } from "../../abstract/MongoBaseTool.js";
import type { FindDocumentsInput } from "./metadata.js";
import metadata from "./metadata.js";





export class FindDocumentsTool
  extends MongoBaseTool<
    FindDocumentsInput
  > {

  constructor(
    context: ToolContext
  ) {

    super(
      context,
      metadata
    );

  }

  protected async execute(
    input: FindDocumentsInput
  ) {

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