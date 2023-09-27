
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn")

[openMenuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menu.style.transition = "transform 0.5s ease";
  });
});

menu.addEventListener("transitionend", function () {
  this.removeAttribute("style");
});

// menu.querySelectorAll(".drop-down > i").forEach((arrow) => {
//   arrow.addEventListener("click", () => {
//     console.log("click");
//     arrow.closest(".drop-down").classList.toggle("active");
//   });
// });
