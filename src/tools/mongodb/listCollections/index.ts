import { ToolContext } from "../../../core/context/ToolContext.js";
import { MongoBaseTool } from "../../abstract/MongoBaseTool.js";

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