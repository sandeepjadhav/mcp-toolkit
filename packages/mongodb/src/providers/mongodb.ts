import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { MongoService } from "../services/MongoService.js";


dotenv.config();

let mongoService: MongoService;

export async function getMongoService() {
  if (mongoService) {
    return mongoService;
  }

  const client = new MongoClient(process.env.MONGODB_URI!);

  await client.connect();

  console.log("✅ MongoDB Connected");
  const db = client.db(process.env.DATABASE_NAME);

  mongoService = new MongoService(db);

  return mongoService;
}