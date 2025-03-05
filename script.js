async function fetchJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    document.getElementById('joke-text').textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    document.getElementById('joke-text').textContent = 'Failed to load joke. Try again later.';
  }
}
window.onload = fetchJoke;

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
