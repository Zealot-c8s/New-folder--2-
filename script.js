document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 55, 280)}ms`;
    revealObserver.observe(item);
  });

  const hero = document.querySelector('.hero');
  const heroImage = document.querySelector('.hero-image');
  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroImage.style.transform = `scale(1.1) translate(${x * -1.5}%, ${y * -1.5}%)`;
  });
  hero.addEventListener('pointerleave', () => {
    heroImage.style.transform = '';
  });

  const form = document.querySelector('.booking-form');
  const button = form.querySelector('button');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    button.innerHTML = 'Thank you — we will be in touch <i data-lucide="check"></i>';
    button.classList.add('submitted');
    if (window.lucide) lucide.createIcons();
  });
});
