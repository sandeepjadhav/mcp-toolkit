import { createServiceToken } from "@mcp-toolkit/core";
import { MongoService } from "../services/MongoService.js";

export const MongoServiceToken =
    createServiceToken<MongoService>("MongoService");
    