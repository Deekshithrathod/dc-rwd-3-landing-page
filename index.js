const hamEl = document.querySelector(".hamburger");
const closeEl = document.querySelector(".close");
const navItemsEl = document.querySelector(".nav-items");

closeEl.addEventListener("click", (e) => {
  closeEl.classList.toggle("active");
  navItemsEl.classList.toggle("fullScreenMenu");
});

hamEl.addEventListener("click", (e) => {
  navItemsEl.classList.toggle("fullScreenMenu");
  closeEl.classList.toggle("active");
});
