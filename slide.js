let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-container img');
const totalSlides = slides.length;

function showNextSlide() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % totalSlides;
    slides[slideIndex].classList.add('active');
}

setInterval(showNextSlide, 6000); // Change slide every 3 seconds
