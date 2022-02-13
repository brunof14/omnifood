const buttonNavMobileEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const sectionHeroEl = document.querySelector(".section-hero");

function toggleMenuMobile() {
  headerEl.classList.toggle("nav-open");
}

function stickHeaderIntersectionCallback(entries) {
  const [firstEntry] = entries;

  if (firstEntry.isIntersecting) {
    document.body.classList.remove("sticky");
    return;
  }

  document.body.classList.add("sticky");
}

const interObs = new IntersectionObserver(stickHeaderIntersectionCallback, {
  rootMargin: "-64px",
});

headerEl.addEventListener("click", toggleMenuMobile);
interObs.observe(sectionHeroEl);
