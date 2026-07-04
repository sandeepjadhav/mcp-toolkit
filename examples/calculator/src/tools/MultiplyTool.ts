import {
  BaseTool,
  defineTool,
  ToolContext
} from "@mcp-toolkit/core";

import {
  calculatorSchema,
  CalculatorInput
} from "./types.js";

const metadata = defineTool({

  name: "calculator_multiply",

  title: "Multiply Numbers",

  description: "Multiplies two numbers.",

  schema: calculatorSchema

});

export class MultiplyTool extends BaseTool<
  typeof calculatorSchema,
  number
> {

  constructor(
    context: ToolContext
  ) {

    super(context, metadata);

  }

  protected async execute(
    input: CalculatorInput
  ) {

    return input.a * input.b;

  }

}