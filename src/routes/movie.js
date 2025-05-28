import express from "express";
import {
  GET_ALL_MOVIE_REC,
  GET_BY_ID,
  GET_BEST_MOVIE,
  GET_MOVIES_BY_RATING,
  IN_MOVIE_RECOM,
  SORT_BY_RATING,
  DELETE_RECOM,
} from "../controllers/movie.js";

const router = express.Router();

router.get("/movies", GET_ALL_MOVIE_REC);

router.get("/movies/:id", GET_BY_ID);

router.get("/bestMovie", GET_BEST_MOVIE);

router.get("/movies/:rating", GET_MOVIES_BY_RATING);

router.post("/movies", IN_MOVIE_RECOM);

router.get("/moviesByRating", SORT_BY_RATING);

router.delete("/movies", DELETE_RECOM);

export default router;
