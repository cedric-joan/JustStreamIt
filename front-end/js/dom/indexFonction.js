// création d'un lien
function createLink(id) {
  const link = document.createElement("a");
  link.href = `http://localhost:8000/api/v1/titles/${id}`;
  return link;
}
// afficher le nom du produit
function createTitle(name) {
  const items = document.querySelector("#movieItems");
  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerText = name;
  items.appendChild(title);
  return items;
}
// afficher une description du produit
function createParagraph(description) {
  const items = document.querySelector("#movieItems");
  const paragraph = document.createElement("p");
  paragraph.classList.add("description");
  items.appendChild(paragraph);
  paragraph.innerText = description;
}
// créer l'élément image du produit
function createImage(image_url) {
  const items = document.querySelector("#bestMovieItems");
  const image = document.createElement("img");
  image.classList.add("modal-trigger")
  image.src = image_url;
  items.appendChild(image);
}
function makeBestmoviesScoresImages(id, image_url){
  const link = document.createElement("a");
  link.href = `http://localhost:8000/api/v1/titles/${id}`;
  const items = document.querySelector("#bestScoresItems");
  const image = document.createElement("img");
  image.classList.add("modal-trigger")
  image.src = image_url;
  link.appendChild(image)
  items.appendChild(link);
}
function makeBestmoviesActionImages(id, image_url){
  const link = document.createElement("a");
  link.href = `http://localhost:8000/api/v1/titles/${id}`;
  const items = document.querySelector("#actionItems");
  const image = document.createElement("img");
  image.classList.add("modal-trigger")
  image.src = image_url;
  link.appendChild(image);
  items.appendChild(link)
}
function makeBestmoviesAdventureImages(id, image_url){
  const link = document.createElement("a");
  link.href = `http://localhost:8000/api/v1/titles/${id}`;
  const items = document.querySelector("#fantasyItems");
  const image = document.createElement("img");
  image.classList.add("modal-trigger")
  image.src = image_url;
  link.appendChild(image);
  items.appendChild(link)
}
function makeBestmoviesComedyImages(id, image_url){
  const link = document.createElement("a");
  link.href = `http://localhost:8000/api/v1/titles/${id}`;
  const items = document.querySelector("#comedyItems");
  const image = document.createElement("img");
  image.classList.add("modal-trigger")
  image.src = image_url;
  link.appendChild(image);
  items.appendChild(link)
}
function modal() {
  const modalTriggers = document.querySelectorAll(".modal-trigger");
  modalTriggers.forEach((trigger) =>
    trigger.addEventListener("click", toggleModal)
  );
}

function toggleModal() {
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.classList.toggle("active");
}


export {modal, toggleModal, makeBestmoviesComedyImages, makeBestmoviesAdventureImages, makeBestmoviesActionImages, makeBestmoviesScoresImages, createImage, createLink, createParagraph, createTitle };
