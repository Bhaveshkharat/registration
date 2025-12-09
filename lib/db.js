import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env");
}

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};