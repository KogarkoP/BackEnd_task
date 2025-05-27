import express from "express";
import cors from "cors";
import movieRouter from "./src/routes/movie.js";
import "dotenv/config";

const app = express();

app.use(cors());

app.use(express.json());

app.use(movieRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});
