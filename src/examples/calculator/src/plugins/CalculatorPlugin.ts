import {
  definePlugin
} from "@mcp-toolkit/core";

import { AddTool } from "../tools/AddTool.js";
import { MultiplyTool } from "../tools/MultiplyTool.js";

export default definePlugin({

  name: "calculator",

  version: "1.0.0",

  description:
    "Simple calculator plugin.",

  tools: [

    AddTool,

    MultiplyTool

  ]

});