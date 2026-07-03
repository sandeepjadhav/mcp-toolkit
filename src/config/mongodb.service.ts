
import { MongoServiceToken } from "./tokens.js";

import { getMongoService } from "./mongodb.js";
import { defineService } from "../lib/service/defineService.js";

export default defineService({

    token: MongoServiceToken,

    async create(){

        return getMongoService();

    }

});