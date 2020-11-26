const AnimatedBtnTop = document.querySelector(".AnimatedBtn-Top");
const AnimatedBtnMiddle = document.querySelector(".AnimatedBtn-Middle");
const AnimatedBtnBottom = document.querySelector(".AnimatedBtn-Bottom");
const AnimatedBtnCover = document.querySelector(".AnimatedBtn-Cover");

AnimatedBtnCover.addEventListener("click", () => {
  AnimatedBtnTop.classList.toggle("AnimatedBtn-TopClick");
  AnimatedBtnMiddle.classList.toggle("AnimatedBtn-MiddleClick");
  AnimatedBtnBottom.classList.toggle("AnimatedBtn-BottomClick");
});