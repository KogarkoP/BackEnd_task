import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import movieRouter from "./src/routes/movies.js";
import "dotenv/config";

const app = express();

app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_CONNECTION)
  .then(console.log("Connected to DB!"))
  .catch((err) => {
    console.log(err);
  });

app.use(movieRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});
