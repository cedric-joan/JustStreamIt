// import { makeModal } from "./createModal.js";

// création d'un lien
function createLink(id) {
  fetch("http://localhost:8000/api/v1/titles/"+id)
  .then((res) => res.json())
  .then((res) => console.log(res));
}
//     function addMovieToModal(res) {
//       const data = res;
//       const {
//         image_url,
//         title,
//         description,
//         actors,
//         genres,
//         countries,
//         rated,
//         date_published,
//         duration,
//         imdb_score,
//         directors,
//       } = data;
//       makeImage(image_url);
//       makeTitle(title);
//   makeGenres(genres);
//   makeRated(rated);
//   makeScore(imdb_score);
//   makeDirectors(directors);
//   makeActors(actors);
//   makeTime(duration);
//   makeCountry(countries);
//   makeDesc(description);
//   makeDate(date_published);
// }
// function makeImage(image_url) {
//   const image = document.querySelector(".image");
//   image.src = image_url;
// }
// function makeTitle(title) {
//   const items = document.querySelector(".title");
//   items.innerText = title;
// }
// function makeGenres(genres) {
//   const items = document.querySelector(".genre");
//   items.innerText = genres;
// }
// function makeDate(date_published) {
//   const items = document.querySelector(".year");
//   items.innerText = date_published;
// }
// function makeRated(rated) {
//   const items = document.querySelector(".rated");
//   items.innerText = rated;
// }
// function makeScore(imdb_score) {
//   const items = document.querySelector(".imdb_score");
//   items.innerText = imdb_score;
// }
// function makeDirectors(directors) {
//   const items = document.querySelector(".directors");
//   items.innerText = directors;
// }
// function makeActors(actors) {
//   const items = document.querySelector(".actors");
//   items.innerText = actors;
// }
// function makeTime(duration) {
//   const items = document.querySelector(".duration");
//   items.innerText = duration;
// }
// function makeCountry(countries) {
//   const items = document.querySelector(".countries");
//   items.innerText = countries;
// }
// function makeDesc(description) {
//   const items = document.querySelector(".desc");
//   items.innerText = description;
// }
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

function makeBestmoviesScoresImages(id,image_url) {
  const items = document.querySelector("#bestScoresItems");
  const image = document.createElement("img");
  image.classList.add('movies')
  image.setAttribute("movie",id)
  image.src = image_url;
  items.appendChild(image);
  // makeModal(id)
}
function makeBestmoviesActionImages(id, image_url) {
  const link = document.createElement("a");
  link.href = `http://localhost:8000/api/v1/titles/${id}`;
  const items = document.querySelector("#actionItems");
  const image = document.createElement("img");
  image.src = image_url;
  // link.appendChild(image);
  items.appendChild(image);
}
function makeBestmoviesAdventureImages(id, image_url) {
  const link = document.createElement("a");
  link.href = `http://localhost:8000/api/v1/titles/${id}`;
  const items = document.querySelector("#fantasyItems");
  const image = document.createElement("img");
  image.src = image_url;
  // link.appendChild(image);
  items.appendChild(image);
}
function makeBestmoviesComedyImages(id, image_url) {
  const link = document.createElement("a");
  link.href = `http://localhost:8000/api/v1/titles/${id}`;
  const items = document.querySelector("#comedyItems");
  const image = document.createElement("img");

  image.src = image_url;
  // link.appendChild(image);
  items.appendChild(image);
}
// const modalTriggers = document.querySelectorAll(".modal-trigger");
// modalTriggers.forEach((trigger) =>
//   trigger.addEventListener("click", toggleModal)
// );

// function toggleModal() {
//   const modalContainer = document.querySelector(".modal-container");
//   modalContainer.classList.toggle(".active");
//   closeModal()
// }

// function closeModal(){
//   const modal = document.querySelector(".modal")

// }
export {
  // toggleModal,
  makeBestmoviesComedyImages,
  makeBestmoviesAdventureImages,
  makeBestmoviesActionImages,
  makeBestmoviesScoresImages,
  createImage,
  createLink,
  createParagraph,
  createTitle,
};
