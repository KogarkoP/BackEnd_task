const insertRecomendation = async (data) => {
  const response = await fetch("http://localhost:3005/movies", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });
  const recomendation = await response.json();
  return recomendation;
};

const id = document.getElementById("id");
const title = document.getElementById("title");
const rating = document.getElementById("rating");
const description = document.getElementById("description");
const imdbLink = document.getElementById("imdb_link");
const submitBtn = document.getElementById("submit_btn");

submitBtn.addEventListener("click", async () => {
  const data = {
    id: id.value,
    title: title.value,
    rating: rating.value,
    description: description.value,
    imdbLink: imdbLink.value,
  };

  insertRecomendation(data);
});
