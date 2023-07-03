const buttonRight = document.getElementById("btn-next");
const buttonLeft = document.getElementById("btn-previuos");
const itemCarousel = document.getElementById("img-carrousel");
const navList = document.getElementById("items-nav-bar");

const carouselImages = [
  "./assets/banner5.jpg",
  "./assets/banner6.jpg",
  "./assets/banner7.jpg",
];

// First carousel image
let index = 0;
itemCarousel.src = carouselImages[index];

const authomaticCarrousel = () => {
  itemCarousel.classList.add("hide");
  setTimeout(() => {
    index++;
    if (index > carouselImages.length - 1) {
      index = 0;
    }
    itemCarousel.src = carouselImages[index];
    itemCarousel.classList.remove("hide");
  }, 500);
};

const nextItemCarousel = () => {
  itemCarousel.classList.add("hide");
  setTimeout(() => {
    index++;
    if (index >= carouselImages.length - 1) {
      index = carouselImages.length - 1;
    }
    itemCarousel.src = carouselImages[index];
    itemCarousel.classList.remove("hide");
    clearInterval(intervalId);
  }, 500);
};

const previuosItemCarousel = () => {
  itemCarousel.classList.add("hide");
  setTimeout(() => {
    index--;
    if (index <= 0) {
      index = 0;
    }
    itemCarousel.src = carouselImages[index];
    itemCarousel.classList.remove("hide");
    clearInterval(intervalId);
  }, 500);
};

// Function to active navbar buttons

const activeItem = (event) => {
  const activeBtn = event.target;
  const activeLink = document.querySelector(".nav-link.active");
  if (activeLink) {
    activeLink.classList.remove("active");
  }
  activeBtn.classList.add("active");
};

buttonLeft.addEventListener("click", previuosItemCarousel);
buttonRight.addEventListener("click", nextItemCarousel);
navList.addEventListener("click", activeItem);

const intervalId = setInterval(authomaticCarrousel, 4000);
