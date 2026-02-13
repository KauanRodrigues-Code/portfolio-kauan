gsap.registerPlugin(ScrollTrigger);

// HERO animation
gsap.from(".hero-content", {
  opacity: 0,
  y: 80,
  duration: 1.5,
  ease: "power3.out"
});

// SCROLL REVEAL animation
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%"
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});