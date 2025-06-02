import recommendationModel from "../models/movies.js";

const moviesRecommendations = [];

export const GET_ALL_MOVIE_REC = async (req, res) => {
  const moviesRecommendations = await recommendationModel.find();
  res.status(200).json({
    movies: moviesRecommendations,
  });
};

export const GET_BY_ID = (req, res) => {
  const id = req.params.id;

  const recommendation = moviesRecommendations.find((r) => {
    return r.id === id;
  });

  if (!recommendation) {
    return res.status(404).json({
      message: "Data does not exist",
    });
  }

  return res.status(200).json({
    message: "Here is your movie recomendation",
    recomendation: recommendation,
  });
};

export const GET_BEST_MOVIE = (req, res) => {
  const bestMovie = moviesRecommendations.reduce((acc, cur) => {
    if (cur.rating > acc.rating) {
      return cur;
    }
    return acc;
  });

  return res.status(200).json({
    message: "Here is your best movie",
    recomendation: bestMovie,
  });
};

export const GET_MOVIES_BY_RATING = (req, res) => {
  const rating = req.params.rating;

  const byRating = moviesRecommendations.filter((recommendation) => {
    return recommendation.rating >= rating;
  });

  return res.status(200).json({
    message: "Here are your movies",
    movies: byRating,
  });
};

export const IN_MOVIE_RECOM = async (req, res) => {
  const movieRecommendation = {
    id: req.body.id,
    title: req.body.title,
    rating: +req.body.rating,
    description: req.body.description,
    imdbLink: req.body.imdbLink,
  };

  const response = new recommendationModel(movieRecommendation);

  const data = await response.save();

  res.status(201).json({
    message: "Movie recomendation was added",
    movieRecomendation: data,
  });
};

export const SORT_BY_RATING = (req, res) => {
  res.status(200).json({
    movies: [...moviesRecommendations].sort((a, b) => {
      return a.rating > b.rating ? -1 : 1;
    }),
  });
};

export const DELETE_RECOM = (req, res) => {
  moviesRecommendations.length = 0;
  res.status(200).json({
    message: "All movies recomendations where deleted",
  });
};
