function makeBestmoviesScoresImages(id, image_url) {
  const items = document.querySelector("#bestScoresItems");
  const image = document.createElement("img");
  image.classList.add("movies");
  image.setAttribute("movie", id);
  image.src = image_url;
  items.appendChild(image);
}
function makeBestmoviesActionImages(id, image_url) {
  const items = document.querySelector(".action");
  const image = document.createElement("img");
  image.classList.add("movies");
  image.setAttribute("movie", id);
  image.src = image_url;
  items.appendChild(image);
}
function makeBestmoviesAdventureImages(id, image_url) {
  const items = document.querySelector("#fantasyItems");
  const image = document.createElement("img");
  image.classList.add("movies");
  image.setAttribute("movie", id);
  image.src = image_url;
  items.appendChild(image);
}
function makeBestmoviesComedyImages(id, image_url) {
  const items = document.querySelector("#comedyItems");
  const image = document.createElement("img");
  image.classList.add("movies");
  image.setAttribute("movie", id);
  image.src = image_url;
  items.appendChild(image);
}

export {
  makeBestmoviesComedyImages,
  makeBestmoviesAdventureImages,
  makeBestmoviesActionImages,
  makeBestmoviesScoresImages,
};
