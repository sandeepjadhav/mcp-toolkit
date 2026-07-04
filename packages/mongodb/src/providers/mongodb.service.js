import { MongoServiceToken } from "./tokens.js";
import { getMongoService } from "./mongodb.js";
import { defineService } from "../../../core/src/public/service/defineService.js";
export default defineService({
    token: MongoServiceToken,
    async create() {
        return getMongoService();
    }
});
