document.addEventListener('DOMContentLoaded', () => {
  // Subtle fade-in animation on scroll for cards and sections
  const animatedElements = document.querySelectorAll(
    '.skill-card, .project-card, .contact-card'
  );

  animatedElements.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  animatedElements.forEach((el) => observer.observe(el));
});