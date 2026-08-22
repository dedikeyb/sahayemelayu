const header = document.querySelector('[data-header]');
const revealItems = document.querySelectorAll('.reveal');

// Update header on scroll
const updateHeader = () => {
  header?.classList.toggle('scrolled', window.scrollY > 24);
};

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

// Gallery hover effects
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item) => {
  item.addEventListener('mouseenter', function() {
    this.style.animation = 'none';
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Parallax effect on hero section
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < hero.offsetHeight) {
      hero.style.backgroundPosition = `center ${scrollY * 0.5}px`;
    }
  }, { passive: true });
}

// Add stagger animation to multiple elements
document.querySelectorAll('[data-stagger]').forEach((el, index) => {
  el.style.animationDelay = `${index * 0.1}s`;
});

console.log('✨ Sahaye Melayu Portfolio Loaded');
