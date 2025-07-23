// ✅ 1. Scroll Reveal for any section with 'animate' class
const animatedSections = document.querySelectorAll('.animate');

const revealOnScroll = () => {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// ✅ 2. Optional: Toggle 'Read More' Sections (for RACK or future use)
const toggleBtn = document.getElementById('toggleBtn');
const fullStory = document.getElementById('fullStory');
const hideBtn = document.getElementById('hideBtn');

if (toggleBtn && fullStory && hideBtn) {
  toggleBtn.addEventListener('click', () => {
    fullStory.style.display = 'block';
    toggleBtn.style.display = 'none';
  });

  hideBtn.addEventListener('click', () => {
    fullStory.style.display = 'none';
    toggleBtn.style.display = 'inline-block';
    fullStory.scrollIntoView({ behavior: 'smooth' });
  });
}
