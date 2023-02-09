// function makeModal(id) {
//   fetch("http://localhost:8000/api/v1/titles/" + id)
//     .then((res) => res.json())
//     .then((data) => {
//       const modalImage = document.querySelector(".image");
//       const modalDescription = document.getElementById("modal-description");
//       const modalContainer = document.querySelector(".modal-container");
//       const movieImage = document.querySelector("img");
//       movieImage.onclick = function () {
//         modalImage.src = data.image_url;
//         modalDescription.innerHTML =
//           (`<p><b>Titre:</b> ${data.original_title}` +
//           "<br>" +
//           `<b>Genre:</b> ${data.genres}` +
//           "<br>" +
//           `<b>Date de sortie:</b> ${data.year}` +
//           "<br>" +
//           `<b>Imdb Score:</b> ${data.imdb_score}` +
//           "<br>" +
//           `<b>Réalisateur:</b> ${data.directors}` +
//           "<br>" +
//           `<b>Acteurs:</b> ${data.actors}` +
//           "<br>" +
//           `<b>Durée:</b> ${data.duration} Minutes` +
//           "<br>" +
//           `<b>Pays d'origine:</b> ${data.countries}` +
//           "<br>" +
//           `<b>Résultat box office:</b> ${data.worldwide_gross_income}$` +
//           "<br>" +
//           `<b>Résumé du film:</b> ${data.description}</p>`);
//           modalContainer.classList.toggle("active");
//         };
//     });
// }
// export { makeModal };
