gsap.registerPlugin(ScrollTrigger);

// Reveal padrão
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out"
  });
});

// Parallax + zoom + rotação nas imagens
gsap.utils.toArray(".watch").forEach((img) => {
  gsap.to(img, {
    scrollTrigger: {
      trigger: img,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    },
    y: -120,
    scale: 1.1,
    rotate: 5
  });
});