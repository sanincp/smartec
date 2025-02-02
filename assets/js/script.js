document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide-text");
  const handImage = document.querySelector(".hand-img img");
  const bgImage = document.querySelector(".landing-right-bg");

  const handImages = [
      "assets/images/base/tablet in hand 1.png",
      "assets/images/base/remote in hand 2.png",
      "assets/images/base/tablet in hand 1.png"
  ];
  const bgImages = [
      "assets/images/base/landing-right-bg.png",
      "assets/images/base/landing-right-bg-2.png",
      "assets/images/base/landing-right-bg.png"
  ];
  const totalSlides = slides.length;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.opacity = "0"; // Hide all slides
          slide.style.position = "absolute"; // Keep all slides stacked
      });

      slides[index].style.opacity = "1"; // Show active slide
      slides[index].style.position = "relative"; // Make it visible

      // Change right-side images smoothly
      handImage.style.opacity = "0";
      bgImage.style.opacity = "0";

      setTimeout(() => {
          handImage.src = handImages[index];
          bgImage.src = bgImages[index];
          handImage.style.opacity = "1";
          bgImage.style.opacity = "1";
      }, 500);
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
  }

  // Auto Slide Change Every 5 Seconds
  setInterval(nextSlide, 5000);

  // Show first slide on load
  showSlide(currentSlide);
});
const hamburger = document.querySelector(".jk-hamburger");
const navMenu = document.querySelector(".jk-nav-menu");

hamburger.addEventListener("click", () => {
  /* Toggle active class */
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  /* Toggle aria-expanded value */
  let menuOpen = navMenu.classList.contains("active");
  console.log(menuOpen);
  let newMenuOpenStatus = menuOpen;
  hamburger.setAttribute("aria-expanded", newMenuOpenStatus);
});

// Close mobile menu
document.querySelectorAll(".jk-nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  // Toggle aria-expanded value here as well
  hamburger.setAttribute("aria-expanded", false);
}));