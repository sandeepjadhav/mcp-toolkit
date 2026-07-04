
import { MongoServiceToken } from "./tokens.js";
import { getMongoService } from "./mongodb.js";
import { defineService } from "@mcp-toolkit/core";

export default defineService({
  token: MongoServiceToken,
  async create() {
    return getMongoService();
  }
});