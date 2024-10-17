let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Show the slide at the specific index
function showSlide(index) {
  // Ensure the index is within the bounds of available slides
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  // Hide all slides and remove the 'active' class from dots
  slides.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  // Show the selected slide and activate the corresponding dot
  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

// Set up the click event for each dot
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Initial setup to show the first slide
showSlide(0);
