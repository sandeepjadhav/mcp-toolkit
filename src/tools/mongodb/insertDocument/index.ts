import metadata from "./metadata.js";

import type {
  InsertDocumentInput
} from "./types.js";

import { ToolContext } from "../../../lib/context/ToolContext.js";

import { MongoBaseTool } from "../../base/MongoBaseTool.js";

export class InsertDocumentTool
  extends MongoBaseTool<
    typeof metadata.schema,
    {
      acknowledged: boolean;
      insertedId: unknown;
    }
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
    input: InsertDocumentInput
  ) {

    return this.mongo.insertDocument(

      input.collection,

      input.document

    );

  }

}