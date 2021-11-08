if (window.innerWidth < 992) {
  let navButton = document.querySelector(".btn-icon");
  navButton.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log('click');
    event.preventDefault();
    let menuMobile = document.querySelector(".hamburger");
    menuMobile.classList.toggle("mobile-menu");
    console.log(menuMobile.classList, menuMobile.classList.contains('mobile-menu'));
    let menuButtons = document.querySelectorAll('.actual-links');
    console.log(menuButtons);
    menuButtons.forEach(menuButton => menuButton.addEventListener('click', event => {
      event.stopPropagation();
      navButton.click();
    }));
  });
}

// let hamburgerElement = document.querySelector('.hamburger');
// if(hamburgerElement.classList.contains('mobile-menu')) {
// }