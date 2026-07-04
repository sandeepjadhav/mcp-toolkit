import { ListCollectionsTool } from "./mongodb/listCollections/index.js";
import { FindDocumentsTool } from "./mongodb/findDocuments/index.js";
import { InsertDocumentTool } from "./mongodb/insertDocument/index.js";

export const mongoTools = [
  ListCollectionsTool,
  FindDocumentsTool,
  InsertDocumentTool,
];