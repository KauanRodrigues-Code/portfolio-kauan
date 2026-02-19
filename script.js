// SCROLL REVEAL
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// HERO TYPE EFFECT
const text = "Criando experiências digitais modernas.";
let index = 0;
const speed = 50;

function typeEffect() {
    const element = document.getElementById("typing");
    if (!element) return;

    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

window.addEventListener("load", typeEffect);

// Navbar background ao scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#0f0f0f";
    } else {
        header.style.background = "rgba(15,15,15,0.8)";
    }
});