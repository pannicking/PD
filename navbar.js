// navbar.js

document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    // Ensure the navbar is visible initially
    header.classList.add('show');

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down - hide navbar
            header.classList.remove('show');
        } else if (scrollTop < lastScrollTop) {
            // Scrolling up - show navbar
            header.classList.add('show');
        }

        lastScrollTop = Math.max(0, scrollTop); // Prevent negative scroll values
    });
});

// slideshow
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const totalSlides = slides.length;

    // Function to show the current slide and update dots
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            dots[i].classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
                dots[i].classList.add("active");
            }
        });
    };

    // Previous and next buttons
    document.querySelector(".prev-btn").addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        showSlide(currentIndex);
    });

    document.querySelector(".next-btn").addEventListener("click", () => {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    // Dot navigation
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    // Initialize the first slide as active
    showSlide(currentIndex);
});
