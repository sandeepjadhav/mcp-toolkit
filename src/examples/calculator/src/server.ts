import {
  McpApplication
} from "@mcp-toolkit/core";

import CalculatorPlugin
from "./plugins/CalculatorPlugin.js";

async function bootstrap() {

  const app =
    new McpApplication({

      name: "Calculator Example",

      version: "1.0.0"

    });

  await app.use(
    CalculatorPlugin
  );

  await app.start();

}

bootstrap();