const hamEl = document.querySelector(".hamburger");
const closeEl = document.querySelector(".close");
const navEl = document.querySelector(".full-page-menu");

closeEl.addEventListener("click", (e) => {
  toggleVisibility();
});

hamEl.addEventListener("click", (e) => {
  toggleVisibility();
});

const toggleVisibility = () => {
  closeEl.classList.toggle("show");
  navEl.classList.toggle("active");
};

// TODO: Event capture & add the selected class to nav-item through JS
