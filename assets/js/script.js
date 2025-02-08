document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide-text");
    const handImage = document.querySelector(".hand-img img");
    const landingRight = document.querySelector(".landing-right"); // Selecting the correct background container
  
    const handImages = [
        "assets/images/base/tablet-in-hand.png",
        "assets/images/base/tablet-in-hand.png",
        "assets/images/base/tablet-in-hand.png",
        "assets/images/base/tablet-in-hand.png",
        "assets/images/base/tablet-in-hand.png"
    ];
    const bgImages = [
        "assets/images/base/slide-1.png",
        "assets/images/base/slide-2.png",
        "assets/images/base/slider-3.png",
        "assets/images/base/slider-4.png",
        "assets/images/base/slider-5.png"
        
    ];
    const totalSlides = slides.length;
  
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = "0"; 
            slide.style.position = "absolute";
        });
  
        slides[index].style.opacity = "1"; 
        slides[index].style.position = "relative"; 
  
        // Change right-side images smoothly
        handImage.style.opacity = "0";
        landingRight.style.opacity = "0"; // Fade out background
  
        setTimeout(() => {
            handImage.src = handImages[index];
            landingRight.style.backgroundImage = `url('${bgImages[index]}')`; // Change background dynamically
            
            handImage.style.opacity = "1";
            landingRight.style.opacity = "1";
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

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    const startCounter = (counter) => {
        counter.innerText = "0";
        const target = +counter.getAttribute("data-target");
        const increment = target / 150; 

        const updateCounter = () => {
            const count = +counter.innerText.replace("+", ""); 

            if (count < target) {
                counter.innerText = Math.ceil(count + increment) + "+"; 
                setTimeout(updateCounter, 60); 
            } else {
                counter.innerText = target + "+"; 
            }
        };

        updateCounter();
    };

    const options = {
        root: null, 
        threshold: 0.5, // 50% of the counter section must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, options);

    counters.forEach(counter => observer.observe(counter));
});


document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-down");

  function fadeOnScroll() {
      elements.forEach(el => {
          const elementTop = el.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementTop < windowHeight - 100) { // Adjust trigger point
              el.classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", fadeOnScroll);
  fadeOnScroll(); // Run once on page load
});