const buttonNavMobileEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

function toggleMenuMobile() {
  headerEl.classList.toggle("nav-open");
}

headerEl.addEventListener("click", toggleMenuMobile);
