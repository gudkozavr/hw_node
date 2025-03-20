import mongoose from "mongoose";
import "dotenv/config";

const MONGO_URI = process.env.MONGO_URI;

export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log(`Connected to DB: ${connection.connection.host}`)
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
