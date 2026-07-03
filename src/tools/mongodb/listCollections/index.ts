import { ToolContext } from "../../../lib/context/ToolContext.js";
import { MongoBaseTool } from "../../base/MongoBaseTool.js";

import metadata, { type ListCollectionsInput } from "./metadata.js";



export class ListCollectionsTool
  extends MongoBaseTool<
    typeof metadata.schema,
    string[]
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
    _: ListCollectionsInput
  ): Promise<string[]> {

    return this.mongo.listCollections();

  }
}