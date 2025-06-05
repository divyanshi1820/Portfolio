document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    let slides = carousel.querySelectorAll(".carousel-img");
    let currentIndex = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    };

    // Attach event listeners to the buttons in this specific carousel
    carousel.querySelector(".next").addEventListener("click", nextSlide);
    carousel.querySelector(".prev").addEventListener("click", prevSlide);

    // Initialize
    showSlide(currentIndex);
  });
});
