import { createServiceToken } from "../core/container/tokens.js";
import { MongoService } from "../services/MongoService.js";

export const MongoServiceToken =
    createServiceToken<MongoService>("MongoService");