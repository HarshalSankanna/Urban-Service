import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const port = process.env.PORT;

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
