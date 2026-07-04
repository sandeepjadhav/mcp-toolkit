import { z } from "zod";
export declare const schema: z.ZodObject<{}, z.core.$strip>;
export type FindDocumentsInput = z.infer<typeof schema>;
declare const _default: import("../../../../../core/src/public/index.js").ToolDefinition<z.ZodObject<{}, z.core.$strip>>;
export default _default;
