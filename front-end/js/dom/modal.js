


// // récupérer id du produit dans url
// const paramsString = window.location.search;
// const searchParams = new URLSearchParams(paramsString);
// const id = searchParams.get("id");
// // ajouter des éléments au produit
// function addArticleToPage(sofa) {
//   const { altTxt, colors, description, imageUrl, price, name } = sofa;
//   createImage(imageUrl, altTxt);
//   createTitle(name);
//   createPrice(price);
//   productPrice = price;
//   productDescription = description;
//   productName = name;
//   productImg = imageUrl;
//   imgText = altTxt;
//   createDescription(description);
//   createColors(colors);
// }
// // afficher l'image du produit
// function createImage(imageUrl, altTxt) {
//   const image = document.createElement("img");
//   image.src = imageUrl;
//   image.altTxt = altTxt;
//   document.querySelector(".item__img").appendChild(image);
// }
// // afficher le nom du produit
// function createTitle(name) {
//   document.querySelector("#title").textContent = name;
// }
// // afficher le prix du produit
// function createPrice(price) {
//   document.querySelector("#price").textContent = price;
// }
// // afficher la description du produit
// function createDescription(description) {
//   document.querySelector("#description").textContent = description;
// }

// // bouton ajout au panier
// function listenToButton(sofa) {
//   document.querySelector("#addToCart").addEventListener("click", () => {
//     const color = document.querySelector("#colors").value;
//     const quantity = document.querySelector("#quantity").value;
//     "" !== color && null != color && null != quantity && 0 != quantity
//       ? saveProduct(color, quantity, sofa)
//       : alert("Veuillez sélectionner une couleur et une quantité");
//   });
//   return sofa;
// }

// fetch(`http://localhost:3000/api/products/${id}`)
//   .then((res) => res.json())
//   .then((sofa) => listenToButton(sofa))
//   .then((sofa) => addArticleToPage(sofa));
