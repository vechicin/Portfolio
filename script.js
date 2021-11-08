// Elements
const navButton = document.querySelector('.btn-icon');
const menuMobile = document.querySelector('.hamburger');
const menuButtons = document.querySelectorAll('.actual-links');

// Functions
const handleLink = () => {
  menuButtons.forEach((menuButton) => menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    navButton.click();
  }));
};

const handleClick = (event) => {
  event.stopPropagation();
  event.preventDefault();
  menuMobile.classList.toggle('mobile-menu');

  handleLink();
};

const handleWindow = () => {
  navButton.addEventListener('click', handleClick);
};

window.addEventListener('resize', () => {
  if (window.innerWidth < 992) {
    handleWindow();
  } else {
    menuMobile.classList.remove('mobile-menu');
  }
});