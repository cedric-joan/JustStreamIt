import { closeModal } from "./indexFonction.js";

async function bestMoviesAction(id) {
  await fetch("http://localhost:8000/api/v1/titles/" + id)
    .then((res) => res.json())
    .then((res) => listener(res))
    .catch((err) => console.error(err));
}
async function bestMoviesAdventure(id) {
  await fetch("http://localhost:8000/api/v1/titles/" + id)
    .then((res) => res.json())
    .then((res) => listener(res))
    .catch((err) => console.error(err));
}
async function bestMoviesComedy(id) {
  await fetch("http://localhost:8000/api/v1/titles/" + id)
    .then((res) => res.json())
    .then((res) => listener(res))
    .catch((err) => console.error(err));
}
function listener() {
  const modalMovies = document.querySelectorAll(".movies");
  modalMovies.forEach((movie) =>
    movie.addEventListener("click", openModalMovie)
  );
}
async function openModalMovie(movie) {
  const id = movie.target.getAttribute("movie");
  await fetch("http://localhost:8000/api/v1/titles/" + id)
    .then((res) => res.json())
    .then((res) => addBestMovieToModal(res))
    .catch((err) => console.error(err));

  const modalContainer = document.querySelector(".modal-container");
  modalContainer.classList.toggle("active");
  closeModal();
}

function addBestMovieToModal(data) {
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
const left = document.querySelector(".slider-left");
left.addEventListener("click", () => {
  const categoryItems = document.getElementById("bestScoresItems");
  categoryItems.classList.toggle("left");
});
const right = document.querySelector(".slider-right");
right.addEventListener("click", () => {
  const category = document.getElementById("bestScoresItems");
  category.classList.toggle("right");
});
const left2 = document.querySelector(".slider-left2");
left2.addEventListener("click", () => {
  const categoryItems = document.getElementById("actionItems");
  categoryItems.classList.toggle("left");
});
const right2 = document.querySelector(".slider-right2");
right2.addEventListener("click", () => {
  const category = document.getElementById("actionItems");
  category.classList.toggle("right");
});
const left3 = document.querySelector(".slider-left3");
left3.addEventListener("click", () => {
  const categoryItems = document.getElementById("fantasyItems");
  categoryItems.classList.toggle("left");
});
const right3 = document.querySelector(".slider-right3");
right3.addEventListener("click", () => {
  const category = document.getElementById("fantasyItems");
  category.classList.toggle("right");
});
const left4 = document.querySelector(".slider-left4");
left4.addEventListener("click", () => {
  const categoryItems = document.getElementById("comedyItems");
  categoryItems.classList.toggle("left");
});
const right4 = document.querySelector(".slider-right4");
right4.addEventListener("click", () => {
  const category = document.getElementById("comedyItems");
  category.classList.toggle("right");
});

export { bestMoviesAction, bestMoviesAdventure, bestMoviesComedy };
