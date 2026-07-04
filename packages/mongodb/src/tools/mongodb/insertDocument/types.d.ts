import { z } from "zod";
export declare const schema: z.ZodObject<{
    collection: z.ZodString;
    document: z.ZodRecord<z.ZodAny, z.core.SomeType>;
}, z.core.$strip>;
export type InsertDocumentInput = z.infer<typeof schema>;
