const header = document.querySelector('[data-header]');
const revealItems = document.querySelectorAll('.reveal');
const playerNote = document.querySelector('[data-player-note]');

const updateHeader = () => {
  header?.classList.toggle('scrolled', window.scrollY > 24);
};

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

document.querySelectorAll('[data-track]').forEach((button) => {
  button.addEventListener('click', () => {
    const track = button.dataset.track;
    document.querySelectorAll('[data-track]').forEach((other) => {
      other.textContent = '▶';
      other.setAttribute('aria-label', `Putar ${other.dataset.track}`);
    });
    button.textContent = 'Ⅱ';
    button.setAttribute('aria-label', `Pause ${track}`);
    if (playerNote) {
      playerNote.textContent = `${track} dipilih — audio player siap dihubungkan ke rilisan resmi.`;
    }
  });
});
