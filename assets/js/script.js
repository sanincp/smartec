$(document).ready(function () {
    const $carousel = $(".owl-carousel");
  
    // Initialize Owl Carousel
    $carousel.owlCarousel({
      items: 1, // Show one item at a time
      loop: true,
      nav: false, // Disable default navigation
      dots: false, // Disable default dots
      autoplay: false // Disable auto-slide for better control with dots
    });
  
    // Custom Dot Navigation
    $(".dot-2").on("click", function () {
      const slideIndex = $(this).data("slide");
      $carousel.trigger("to.owl.carousel", [slideIndex, 10]); // Move to the specific slide
      $(".dot-2").removeClass("active"); // Remove active class from all dots
      $(this).addClass("active"); // Add active class to the clicked dot
    });
  
    // Sync Custom Dots with Carousel
    $carousel.on("changed.owl.carousel", function (event) {
      const currentIndex = event.item.index - 2; // Adjust index to match the slide
      $(".dot-2").removeClass("active");
      $(`.dot-2[data-slide=${currentIndex}]`).addClass("active");
    });
  });
  