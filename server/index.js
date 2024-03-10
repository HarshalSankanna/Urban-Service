import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
dotenv.config();

import authRoute from "./routes/authRoutes.js";

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
