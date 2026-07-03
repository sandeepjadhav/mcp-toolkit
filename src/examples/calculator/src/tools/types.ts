import { z } from "zod";

export const calculatorSchema = z.object({
  a: z.number(),
  b: z.number()
});

export type CalculatorInput =
  z.infer<typeof calculatorSchema>;