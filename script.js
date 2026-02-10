gsap.registerPlugin(ScrollTrigger);

// HEADER
gsap.from(".header", {
  y: -50,
  opacity: 0,
  duration: 1
});

// HERO
gsap.from(".hero-title", {
  y: 60,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.from(".hero-text", {
  y: 40,
  opacity: 0,
  delay: 0.6
});

gsap.from(".btn-primary", {
  y: 20,
  opacity: 0,
  delay: 0.9
});

// PRODUCTS
gsap.from(".product-card", {
  scrollTrigger: {
    trigger: ".products",
    start: "top 80%",
  },
  y: 60,
  opacity: 0,
  stagger: 0.2
});