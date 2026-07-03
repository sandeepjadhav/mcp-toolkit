import { createServiceToken } from "../lib/container/tokens.js";
import { MongoService } from "../services/MongoService.js";

export const MongoServiceToken =
    createServiceToken<MongoService>("MongoService");