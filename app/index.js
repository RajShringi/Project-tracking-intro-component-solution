const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
let hamOpen = false;

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamOpen = hamOpen === false ? true : false;
  navMenu.classList.toggle("active");
  hamburger.innerHTML =
    hamOpen === true
      ? '<img src="images/icon-close.svg" alt="icon-close" />'
      : '<img src="images/icon-hamburger.svg" alt="hamburger" />';
}

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", mobileMenu);
});
