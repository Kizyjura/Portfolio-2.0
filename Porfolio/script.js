
document.getElementById('explore-btn').addEventListener('click', () => {
  document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
});

// Animate Hero Text
window.addEventListener('load', () => {
  document.getElementById('hero-text').style.opacity = 1;
});