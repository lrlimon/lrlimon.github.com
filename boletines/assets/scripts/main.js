// console.log("Hola script!");

// let container = document.querySelector(".container");
// let table = document.querySelector(".table");
// let links = document.querySelectorAll("a.internal");
// let celdas = document.querySelectorAll("td");
let links = document.querySelectorAll(".close");
// let icons = document.querySelectorAll("i");

// console.log(container);
// console.log(table);
// console.log(links);

// links.forEach(function(link) {
//   console.log(link);
// });

// celdas.forEach(function(td) {
//   td.addEventListener('click', function() {
//     console.log(this);
//   });
// });

// Animated fadeout from pages for getting index
links.forEach(function(link) {
  link.addEventListener('click', function(ev) {
    ev.preventDefault();

    let content = document.querySelector(".content");

    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    content.classList.add("animated");
    content.classList.add("fadeOutUp");

    setTimeout(function() {
      location.href = link.href;
    }, 900);

    return false;
  });
});

// icons.forEach(function(icon) {
//   icon.classList.remove("fa-star-o");
// });
