const carousel = document.querySelector(".carousel");
const slideContainer = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".carousel-right-btn");
const prevBtn = document.querySelector(".carousel-left-btn");
const dotNavs = document.querySelectorAll(".carousel-indicator");
const carouselIndicator = Array.from(document.querySelectorAll(".carousel-indicator"));
const getSlides = () => document.querySelectorAll(".carousel-slide");
let slides = getSlides();

const slideWidth = slides[0].getBoundingClientRect().width;
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
let currentSlide = 1;
const interval = 3000;
let stopSlideInterval;

slideContainer.append(firstClone);
slideContainer.prepend(lastClone);
slideContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`;

function nextSlide() {
    slides = getSlides();
    if (currentSlide >= slides.length - 1) return;
    currentSlide++;
    slideContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
    slideContainer.style.transition = "transform 500ms ease-out";
    updateIndicator();
}

function prevSlide() {
    if (currentSlide <= 0) return;
    currentSlide--;
    slideContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
    slideContainer.style.transition = "transform 500ms ease-out";
    updateIndicator();
}

function updateIndicator() {
    slides = getSlides();
    let activeSlide = Number(slides[currentSlide].id.split("-")[1]);
    carouselIndicator.forEach(button => {
        button.classList.remove("active-slide");

    });
    carouselIndicator[activeSlide].classList.add("active-slide");
}

function indicatorBtnClick() {
    carouselIndicator.forEach((btn) => {
        btn.onclick = function () {
            currentSlide = Number(btn.id.split("-")[1]);
            updateIndicator();
            slideContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
        }
    })
}

const startSlide = () => {
    stopSlideInterval = setInterval(() => {
        nextSlide();
    }, interval);
};

slideContainer.addEventListener("transitionend", () => {
    slides = getSlides();
    if (slides[currentSlide] === firstClone) {
        slideContainer.style.transition = "none";
        currentSlide = 1;
        slideContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
    } else if (slides[currentSlide] === lastClone) {
        slideContainer.style.transition = "none";
        currentSlide = 3;
        slideContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
    }
});

carousel.addEventListener("mouseenter", () => {
    clearInterval(stopSlideInterval);
});

carousel.addEventListener("mouseleave", startSlide);
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
startSlide();
indicatorBtnClick();



