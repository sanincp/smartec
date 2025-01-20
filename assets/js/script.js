let index = 0;
const slides = document.querySelectorAll('.slide-text');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    if (n >= slides.length) { index = 0; }
    if (n < 0) { index = slides.length - 1; }
    slides.forEach(slide => slide.style.transform = `translateX(-${index * 100}%)`);
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
});

setInterval(() => {
    index++;
    showSlide(index);
}, 5000); // Automatically slides every 5 seconds
