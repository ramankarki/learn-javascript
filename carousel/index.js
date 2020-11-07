// DOM element queries
const carousel = document.querySelector(".carousel");
const slideContainer = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".carousel-right-btn");
const prevBtn = document.querySelector(".carousel-left-btn");
const carouselIndicator = Array.from(document.querySelectorAll(".carousel-indicator"));
const getSlides = () => document.querySelectorAll(".carousel-slide");
let slides = getSlides();

// carousel setup before starting auto transition
let currentSlide = 1;
const interval = 3000;
let stopSlide;
let activeSlideId;
let slideWidth = slides[0].getBoundingClientRect().width;
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
slideContainer.append(firstClone);
slideContainer.prepend(lastClone);
slideContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
slideTransition();


//     ############ functions ###############

function nextSlide() {
    slides = getSlides();
    if (currentSlide >= slides.length - 1) return;
    currentSlide++;
    slideTransition();
}

function prevSlide() {
    if (currentSlide <= 0) return;
    currentSlide--;
    slideTransition();
}

function slideTransition() {
    // move slides
    slideWidth = slides[0].getBoundingClientRect().width;
    slideContainer.style.transition = "transform 500ms ease-out";
    slideContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`;

    // update indicator
    slides = getSlides();
    activeSlideId = Number(slides[currentSlide].id.split("-")[1]);
    carouselIndicator.forEach(button => {
        button.classList.remove("active-slide-indicator");
    });
    carouselIndicator[activeSlideId].classList.add("active-slide-indicator");
}


// ############# event listeners ############

// slides and indicator gets updated when indicator button clicked
function indicatorBtnClick() {
    carouselIndicator.forEach((btn) => {
        btn.onclick = function () {
            currentSlide = Number(btn.id.split("-")[1]);
            slideTransition();
        }
    })
}
indicatorBtnClick();

// slides auto moves every 3 sec
const startSlide = () => {
    stopSlide = setInterval(() => {
        nextSlide();
    }, interval);
};
startSlide();

// checks if current slide is first or last after transition end
slideContainer.addEventListener("transitionend", () => {
    slides = getSlides();
    if (slides[currentSlide] === firstClone) {
        currentSlide = 1;
    } else if (slides[currentSlide] === lastClone) {
        currentSlide = slides.length - 2;
    }
    slideContainer.style.transition = "none";
    slideContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
});

// slides auto move stops when hover
carousel.addEventListener("mouseenter", () => {
    clearInterval(stopSlide);
});
carousel.addEventListener("mouseleave", startSlide);

// previous and next buttons
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
