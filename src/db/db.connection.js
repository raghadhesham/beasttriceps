import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "node:path";
dotenv.config({path:path.resolve('src/.env.development')})
export const connectDb = async () => {
  try {
      await mongoose.connect(
          process.env.CONNECTION_URI
    );
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};
