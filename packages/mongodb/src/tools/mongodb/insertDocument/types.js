import { z } from "zod";
export const schema = z.object({
    collection: z.string().min(1),
    document: z.record(z.any())
});
