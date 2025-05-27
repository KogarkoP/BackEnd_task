const moviesRecomendations = [];

export const GET_ALL_MOVIE_REC = (req, res) => {
  const noData = moviesRecomendations.length === 0;

  if (noData) {
    return res.status(404).json({
      message: "Data doesn't exist",
    });
  }

  res.status(200).json({
    movies: moviesRecomendations,
  });
};

export const GET_BY_ID = (req, res) => {
  const id = req.params.id;

  const recomendation = moviesRecomendations.find((r) => {
    return r.id === id;
  });

  if (!recomendation) {
    return res.status(404).json({
      message: "Data does not exist",
    });
  }

  return res.status(200).json({
    message: "Here is your movie recomendation",
    recomendation: recomendation,
  });
};

export const GET_BEST_MOVIE = (req, res) => {
  const bestMovie = (moviesRecomendations) => {
    let movie;
    moviesRecomendations.reduce((acc, cur) => {
      if (cur.rating > acc.rating) {
        return (movie = cur);
      }
      return (movie = acc);
    });
    return movie;
  };
  return res.status(200).json({
    message: "Here is your best movie",
    recomendation: bestMovie(moviesRecomendations),
  });
};

export const GET_MOVIES_BY_RATING = (req, res) => {
  const rating = req.params.rating;

  const byRating = moviesRecomendations.filter((recommendation) => {
    return recommendation.rating >= rating;
  });

  return res.status(200).json({
    message: "Here are your movies",
    movies: byRating,
  });
};

export const IN_MOVIE_RECOM = (req, res) => {
  const movieRecomendation = {
    id: req.body.id,
    title: req.body.title,
    rating: req.body.rating,
    description: req.body.description,
    imdbLink: req.body.imdbLink,
  };

  const exists = moviesRecomendations.some((recomendation) => {
    return recomendation.id === movieRecomendation.id;
  });

  if (exists) {
    return res.status(400).json({
      message: "Movie with the same ID already exists",
    });
  }

  moviesRecomendations.push(movieRecomendation);

  res.status(201).json({
    message: "Movie recomendation was added",
    movieRecomendation: movieRecomendation,
  });
};

export const SORT_BY_RATING = (req, res) => {
  res.status(200).json({
    movies: [...moviesRecomendations].sort((a, b) => {
      return a.rating > b.rating ? -1 : 1;
    }),
  });
};

export const DELETE_RECOM = (req, res) => {
  moviesRecomendations.length = 0;
  res.status(200).json({
    message: "All movies recomendations where deleted",
  });
};
