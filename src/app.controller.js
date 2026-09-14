import express from "express";
import { connectDb } from "./db/db.connection.js";
import {
  loginController,
  signupController,
} from "./modules/auth/auth.controllers.js";

export const bootstrap = async (app) => {
  await connectDb();
  app.use(express.json());
  app.post("/auth/signup", signupController);
  app.post("/auth/login", loginController);
  app.get("/", (req, res) => {
    res.status(200).json("Welcome to Beast Triceps");
  });
  app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
  });
};
