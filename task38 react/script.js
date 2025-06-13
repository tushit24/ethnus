const imagePaths = [
  "thumb-1920-918482.jpg",
  "images (1).jpeg",
  "sci-fi-background-q91yv67o7rlsdsu8.jpg"
];

let current = 0;

function updateSlide() {
  document.getElementById("carouselImage").src = imagePaths[current];
}

function nextSlide() {
  current = (current + 1) % imagePaths.length;
  updateSlide();
}

function prevSlide() {
  current = (current - 1 + imagePaths.length) % imagePaths.length;
  updateSlide();
}

window.onload = updateSlide;
