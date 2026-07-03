import { McpApplication } from "./lib/index.js";
import MongoPlugin from "./lib/plugin/MongoPlugin.js";

async function bootstrap() {

  const app = new McpApplication({
    name: "MCP Toolkit",
    version: "1.0.0"
  });

  await app.use(MongoPlugin);
  await app.start();

}

bootstrap();