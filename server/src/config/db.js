import mongoose from "mongoose";
import { config } from "./envConfig.js";

async function connectDB() {
  try {
    await mongoose.connect(config.mongoURI);
    console.log("MongoDb connect successfully");
  } catch (error) {
    console.log("Failed to connect db", error.message);
    process.exit(1);
  }
}

export default connectDB;
