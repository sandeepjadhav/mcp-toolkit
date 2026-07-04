import type { Document } from "mongodb";
export interface FindDocumentsOptions {
    filter?: Document;
    projection?: Document;
    sort?: Document;
    skip?: number;
    limit?: number;
}
