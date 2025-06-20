// Movie Data (add your images to the assets folder)
const movies = [
  { title: "Kahaani", image: "album1.jpg" },
  { title: "Padmaavat", image: "album 2.jpg" },
  { title: "Andhadhun", image: "album 3.jpg" },
  { title: "Stree", image: "album 4.jpg" },
  { title: "Kabhi Khushi Kabhi Gum", image: "album5.jpg" }
];

// Render movie cards
function renderMovies(list) {
  const container = document.getElementById("movieList");
  container.innerHTML = "";
  list.forEach(movie => {
    container.innerHTML += `
      <div class="movie-card">
        <img src="${movie.image}" alt="${movie.title}">
        <h4>${movie.title}</h4>
        <span class="heart" onclick="toggleFav(this)">💚</span>
      </div>`;
  });
}
renderMovies(movies);

// Favorite Toggle
function toggleFav(el) {
  el.classList.toggle("liked");
}

// Search Functionality
document.getElementById("searchInput").addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  const filtered = movies.filter(movie => movie.title.toLowerCase().includes(keyword));
  renderMovies(filtered);
});

// Carousel Auto Slide
let index = 0;
setInterval(() => {
  const slides = document.querySelector(".slides");
  index = (index + 1) % 3;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

// Accordion Functionality
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    item.classList.toggle("active");
  });
});
