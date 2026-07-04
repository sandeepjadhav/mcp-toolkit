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

  name: "calculator_add",

  title: "Add Numbers",

  description: "Adds two numbers.",

  schema: calculatorSchema

});

export class AddTool extends BaseTool<
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

    return input.a + input.b;

  }

}