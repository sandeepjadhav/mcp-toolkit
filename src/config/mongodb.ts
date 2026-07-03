import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { MongoService } from "../services/MongoService.js";
import { Logger } from "../lib/logger/logger.js";

dotenv.config();

let mongoService: MongoService;

export async function getMongoService() {
  if (mongoService) {
    return mongoService;
  }

  const client = new MongoClient(process.env.MONGODB_URI!);

  await client.connect();

  Logger.info("✅ MongoDB Connected");
  const db = client.db(process.env.DATABASE_NAME);

  mongoService = new MongoService(db);

  return mongoService;
}