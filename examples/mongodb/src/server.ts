import { McpApplication } from "@mcp-toolkit/core";
import { MongoPlugin } from "@mcp-toolkit/mongodb";

async function bootstrap() {

  const app = new McpApplication({
    name: "Mongo Example",
    version: "1.0.0"
  });

  await app.use(MongoPlugin);

  await app.start();

}

bootstrap();