const fetchRecommendations = async () => {
  const response = await fetch("http://localhost:3005/movies");

  const data = await response.json();
  return data.movies;
};

const recommendationsCards = (recommendations) => {
  const movieRecommendation = document.getElementById("movie_recommendations");

  recommendations.forEach((recommendation) => {
    const recommendationCard = document.createElement("div");

    const recommendationId = document.createElement("p");
    recommendationId.textContent = recommendation.id;

    const recommendationTitle = document.createElement("p");
    recommendationTitle.textContent = recommendation.title;

    const recommendationRating = document.createElement("p");
    recommendationRating.textContent = recommendation.rating;

    const recommendationDes = document.createElement("p");
    recommendationDes.textContent = recommendation.description;

    const recommendationImdb = document.createElement("p");
    recommendationImdb.textContent = recommendation.imdbLink;

    movieRecommendation.append(recommendationCard);
    recommendationCard.append(recommendationId);
    recommendationCard.append(recommendationTitle);
    recommendationCard.append(recommendationRating);
    recommendationCard.append(recommendationDes);
    recommendationCard.append(recommendationImdb);
  });
};

const initRecommendations = async () => {
  const data = await fetchRecommendations();
  recommendationsCards(data);
};

initRecommendations();
