import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
dotenv.config();

import authRoute from "./routes/authRoutes.js";
import serviceRoute from "./routes/serviceRoutes.js";

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//routes
app.use("/", authRoute);
app.use("/", serviceRoute);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome");
});

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Server connected to database");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
