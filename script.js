let navButton = document.querySelector(".btn-icon");
navButton.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();
  let menuMobile = document.querySelector(".hamburger");
  menuMobile.classList.toggle("mobile-menu");
});
