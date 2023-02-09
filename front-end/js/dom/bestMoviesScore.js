function addBestMovieScoreToModal(data) {
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
function bestMoviesScore(id) {
  fetch("http://localhost:8000/api/v1/titles/" + id)
    .then((res) => res.json())
    .then((res) => listener(res));
}
function listener() {
  const modalMovies = document.querySelectorAll(".movies");
  modalMovies.forEach((movie) => movie.addEventListener("click", openModal));
}
async function openModal(movie) {
  const id = movie.target.getAttribute("movie");
  await fetch("http://localhost:8000/api/v1/titles/" + id)
    .then((res) => res.json())
    .then((res) => addBestMovieScoreToModal(res));

  const modalContainer = document.querySelector(".modal-container");
  modalContainer.classList.toggle("active");
  closeModal();
}
function closeModal() {
  const modal = document.querySelector(".close");
  modal.addEventListener("click", () => {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.remove("active");
  });
}

const left = document.querySelector(".slider-left1");
left.addEventListener("click", () => {
  const category = document.getElementById("bestScoresItems");
  category.classList.toggle("left");
});
const right = document.querySelector(".slider-right1");
right.addEventListener("click", () => {
  const category = document.getElementById("bestScoresItems");
  category.classList.toggle("right");
});
export { bestMoviesScore };
