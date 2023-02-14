// import des fonctions dans indexFonctions
import {
  createLink,
  createImage,
  createTitle,
  createParagraph,
  makeBestmoviesScoresImages,
  makeBestmoviesActionImages,
  makeBestmoviesAdventureImages,
  makeBestmoviesComedyImages,
} from "./dom/indexFonction.js";
// import { bestMoviesScore } from "./dom/bestMoviesScore.js";
import { BestMoviesAction } from "./dom/bestMoviesAction.js";

// récupérer le film avec le meilleur score du server
const urlApi = "http://localhost:8000/api/v1/titles/9008642";
await fetch(urlApi)
  .then((res) => res.json())
  .then((data) => displayMovies(data))
  .catch((err) => console.error(err));

// récupérer les éléments du film
async function displayMovies(res) {
  const data = res;
  const {id, title, description, image_url } = data;
  createLink(id);
  createImage(image_url);
  createTitle(title);
  createParagraph(description);
}

// récupérer tous les films les mieux notés toutes catégories du server
for (let i = 1; i < 3; i++) {
  const urlApi = `http://localhost:8000/api/v1/titles/?imdb_score_min=9.4&page=${i}`;
  await fetch(urlApi)
    .then((res) => res.json())
    .then((data) => displayBestmoviesScores(data))
    .catch((err) => console.error(err));
}

async function displayBestmoviesScores(res) {
  const data = res.results;
  for (let i = 0; i < 5; i++) {
    const { id, image_url } = data[i];
    makeBestmoviesScoresImages(id,image_url);
    // bestMoviesScore(id)
  }
}
// récupérer tous les films les mieux notés catégorie action du server
for (let i = 2; i < 4; i++) {
  const urlApi = `http://localhost:8000/api/v1/titles/?genre=action&imdb_score_min=8.8&page=${i}`;
  await fetch(urlApi)
    .then((res) => res.json())
    .then((data) => displayBestmoviesAction(data))
    .catch((err) => console.error(err));
}

async function displayBestmoviesAction(res) {
  const data = res.results;
  for (let i = 1; i < 5; i++) {
    const { id, image_url } = data[i];
    makeBestmoviesActionImages(id, image_url);
    BestMoviesAction(id)
  }
}
// récupérer tous les films les mieux notés catégorie aventure du server
for (let i = 1; i < 3; i++) {
  const urlApi = `http://localhost:8000/api/v1/titles/?genre=adventure&imdb_score_min=8.8&page=${i}`;
  await fetch(urlApi)
    .then((res) => res.json())
    .then((data) => displayBestmoviesAdventure(data))
    .catch((err) => console.error(err));
}

async function displayBestmoviesAdventure(res) {
  const data = res.results;
  for (let i = 0; i < 4; i++) {
    const { id, image_url } = data[i];
    makeBestmoviesAdventureImages(id, image_url);
  }
}
// récupérer tous les films les mieux notés catégorie comedy du server
for (let i = 1; i < 3; i++) {
  const urlApi = `http://localhost:8000/api/v1/titles/?genre=comedy&imdb_score_min=9.1&page=${i}`;
  await fetch(urlApi)
    .then((res) => res.json())
    .then((data) => displayBestmoviesComedy(data))
    .catch((err) => console.error(err));
}

async function displayBestmoviesComedy(res) {
  const data = res.results;
  for (let i = 0; i < 5; i++) {
    const { id, image_url } = data[i];
    makeBestmoviesComedyImages(id, image_url);
  }
}
