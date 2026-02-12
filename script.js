// Animação entrada texto
gsap.from(".hero-content", {
  opacity: 0,
  y: 80,
  duration: 1.5,
  ease: "power4.out"
});

// Relógio principal
gsap.from(".watch-main", {
  opacity: 0,
  x: 100,
  duration: 1.5,
  ease: "power4.out"
});

// Relógio secundário
gsap.from(".watch-side", {
  opacity: 0,
  x: -100,
  duration: 1.5,
  delay: 0.3,
  ease: "power4.out"
});