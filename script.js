// =========================
// MOBILE NAVBAR TOGGLE
// =========================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// =========================
// ACTIVE NAV LINK HIGHLIGHT
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".feature-card, .menu-card, .testimonial-card, .contact-card, .about-text, .gallery-grid img"
);

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);


// =========================
// GALLERY LIGHTBOX
// =========================

// Create lightbox dynamically
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

// Open image in lightbox
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");

        const image = document.createElement("img");
        image.src = img.src;

        // Clear previous image
        lightbox.innerHTML = "";
        lightbox.appendChild(image);
    });
});

// Close lightbox on click
lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});
