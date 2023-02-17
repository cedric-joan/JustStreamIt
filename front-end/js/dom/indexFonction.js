// afficher le nom du film
function createTitle(name) {
  const items = document.querySelector("#movieItems");
  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerText = name;
  items.appendChild(title);
  return items;
}
// afficher une description du film
function createParagraph(description) {
  const items = document.querySelector("#movieItems");
  const paragraph = document.createElement("p");
  paragraph.classList.add("description");
  items.appendChild(paragraph);
  paragraph.innerText = description;
}
// créer l'élément image du film
function createImage(image_url) {
  const items = document.querySelector("#bestMovieItems");
  const image = document.createElement("img");
  image.src = image_url;
  items.appendChild(image);
}
function createLink(id) {
  const play = document.querySelector(".play");
  play.addEventListener("click", () => {
    fetch("http://localhost:8000/api/v1/titles/" + id)
      .then((res) => res.json())
      .then((res) => addMovieToModal(res))
      .catch((err) => console.error(err));

    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.toggle("active");
    closeModal();
  });
}
// création de la modale
function addMovieToModal(res) {
  const data = res;
  const {
    image_url,
    title,
    description,
    actors,
    genres,
    countries,
    rated,
    date_published,
    duration,
    imdb_score,
    directors,
  } = data;
  makeImage(image_url);
  makeTitle(title);
  makeGenres(genres);
  makeRated(rated);
  makeScore(imdb_score);
  makeDirectors(directors);
  makeActors(actors);
  makeTime(duration);
  makeCountry(countries);
  makeDesc(description);
  makeDate(date_published);
}
function makeImage(image_url) {
  const image = document.querySelector(".image");
  image.src = image_url;
}
function makeTitle(title) {
  const items = document.querySelector(".title");
  items.innerText = title;
}
function makeGenres(genres) {
  const items = document.querySelector(".genre");
  items.innerText = genres;
}
function makeDate(date_published) {
  const items = document.querySelector(".year");
  items.innerText = date_published;
}
function makeRated(rated) {
  const items = document.querySelector(".rated");
  items.innerText = rated;
}
function makeScore(imdb_score) {
  const items = document.querySelector(".imdb_score");
  items.innerText = imdb_score;
}
function makeDirectors(directors) {
  const items = document.querySelector(".directors");
  items.innerText = directors;
}
function makeActors(actors) {
  const items = document.querySelector(".actors");
  items.innerText = actors;
}
function makeTime(duration) {
  const items = document.querySelector(".duration");
  items.innerText = duration;
}
function makeCountry(countries) {
  const items = document.querySelector(".countries");
  items.innerText = countries;
}
function makeDesc(description) {
  const items = document.querySelector(".desc");
  items.innerText = description;
}

function closeModal() {
  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    const image = document.querySelector(".image");
    image.innerText = " ";
    const title = document.querySelector(".title");
    title.innerText = " ";
    const genre = document.querySelector(".genre");
    genre.innerText = "";
    const year = document.querySelector(".year");
    year.innerText = " ";
    const rated = document.querySelector(".rated");
    rated.innerText = " ";
    const score = document.querySelector(".imdb_score");
    score.innerText = " ";
    const director = document.querySelector(".directors");
    director.innerText = " ";
    const actor = document.querySelector(".actors");
    actor.innerText = " ";
    const duration = document.querySelector(".duration");
    duration.innerText = " ";
    const country = document.querySelector(".countries");
    country.innerText = " ";
    const desc = document.querySelector(".desc");
    desc.innerText = " ";
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.remove("active");
  });
}
export { createImage, createLink, createParagraph, createTitle, closeModal };
