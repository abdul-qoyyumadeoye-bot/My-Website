document.addEventListener('DOMContentLoaded', () => {
  // 1. Subtle fade-in animation on scroll for cards
  const animatedElements = document.querySelectorAll(
    '.skill-card, .project-card, .contact-card'
  );

  animatedElements.forEach((el) => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  animatedElements.forEach((el) => revealObserver.observe(el));

  // 2. Highlight active navbar link based on scroll position
  const sections = document.querySelectorAll('#about, #skills, #projects');
  const navLinks = document.querySelectorAll('.nav-link');

  const updateActiveNav = () => {
    let currentSectionId = 'about';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });
});