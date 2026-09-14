import express from "express"
import { bootstrap } from "./app.controller.js"
export const app = express()
bootstrap(app); 