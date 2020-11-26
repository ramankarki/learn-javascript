const AnimatedBtn = document.querySelector(".AnimatedBtn-Cover");
const navLinks = document.querySelector(".nav-links");

AnimatedBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("nav-links-width");
});
