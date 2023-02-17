// import des fonctions dans indexFonctions
import {
  createLink,
  createImage,
  createTitle,
  createParagraph,
} from "./dom/indexFonction.js";
import {
  bestMoviesAction,
  bestMoviesAdventure,
  bestMoviesComedy,
} from "./dom/bestMoviesScores.js";
import {
  makeBestmoviesScoresImages,
  makeBestmoviesActionImages,
  makeBestmoviesAdventureImages,
  makeBestmoviesComedyImages,
} from "./dom/makeBestMovies.js";

const url = "http://localhost:8000/api/v1/titles/";

// récupérer le film avec le meilleur score du server
fetch(`${url}?sort_by=-imdb_score`)
  .then((res) => res.json())
  .then((data) => displayMovies(data))
  .catch((err) => console.error(err));

// récupérer les éléments du film
function displayMovies(res) {
  const data = res.results;
  const { id, title, image_url } = data[0];
  createLink(id);
  createImage(image_url);
  createTitle(title);
  createDescription(id);
}
function createDescription(id){
  fetch(`${url}`+ id)
  .then((res) => res.json())
  .then((res) => descMovies(res))
  .catch((err) => console.error(err));
}
function descMovies(res){
  const description = res.description
  createParagraph(description);
}
const urlPage1 =  fetch(`${url}?genre=action&sort_by=-imdb_score`)
const urlPage2 =  fetch(`${url}?genre=action&page=2&sort_by=-imdb_score`)
Promise.all([urlPage1, urlPage2])
.then((res) => {
  console.log(res.results)
  .catch((err) => console.error(err));

})
// récupérer tous les films les mieux notés toutes catégories du server
for (let i = 1; i < 3; i++) {
  fetch(`${url}?imdb_score_min=9.4&page=${i}`)
    .then((res) => res.json())
    .then((data) => displayBestmoviesScores(data))
    .catch((err) => console.error(err));
}

function displayBestmoviesScores(res) {
  const data = res.results;
  for (let i = 0; i < 5; i++) {
    const { id, image_url } = data[i];
    makeBestmoviesScoresImages(id, image_url);
  }
}
// récupérer tous les films les mieux notés catégorie action du server
for (let i = 2; i < 4; i++) {
  fetch(`${url}?genre=action&imdb_score_min=8.8&page=${i}`)
    .then((res) => res.json())
    .then((data) => displayBestmoviesAction(data))
    .catch((err) => console.error(err));
}
function displayBestmoviesAction(res) {
  const data = res.results;
  for (let i = 1; i < 5; i++) {
    const { id, image_url } = data[i];
    makeBestmoviesActionImages(id, image_url);
    bestMoviesAction(id);
  }
}
// récupérer tous les films les mieux notés catégorie aventure du server
for (let i = 1; i < 3; i++) {
  fetch(`${url}?genre=adventure&imdb_score_min=8.8&page=${i}`)
    .then((res) => res.json())
    .then((data) => displayBestmoviesAdventure(data))
    .catch((err) => console.error(err));
}
function displayBestmoviesAdventure(res) {
  const data = res.results;
  for (let i = 0; i < 4; i++) {
    const { id, image_url } = data[i];
    makeBestmoviesAdventureImages(id, image_url);
    bestMoviesAdventure(id);
  }
}
// récupérer tous les films les mieux notés catégorie comedy du server
for (let i = 1; i < 3; i++) {
  fetch(`${url}?genre=comedy&imdb_score_min=9.1&page=${i}`)
    .then((res) => res.json())
    .then((data) => displayBestmoviesComedy(data))
    .catch((err) => console.error(err));
}
async function displayBestmoviesComedy(res) {
  const data = res.results;
  for (let i = 0; i < 5; i++) {
    const { id, image_url } = data[i];
    makeBestmoviesComedyImages(id, image_url);
    bestMoviesComedy(id);
  }
}
