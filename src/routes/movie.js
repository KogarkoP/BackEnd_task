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

router.get("/getMoviesRecomendations", GET_ALL_MOVIE_REC);

router.get("/getById/:id", GET_BY_ID);

router.get("/getBestMovie", GET_BEST_MOVIE);

router.get("/getMoviesHigherThan/:rating", GET_MOVIES_BY_RATING);

router.post("/insertMovieRecomendation", IN_MOVIE_RECOM);

router.get("/sortByRating", SORT_BY_RATING);

router.delete("/deleteMoviesRecomendations", DELETE_RECOM);

export default router;
