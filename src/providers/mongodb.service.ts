
import { MongoServiceToken } from "./tokens.js";

import { getMongoService } from "./mongodb.js";
import { defineService } from "../core/service/defineService.js";

export default defineService({

    token: MongoServiceToken,

    async create(){

        return getMongoService();

    }

});