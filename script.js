// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.classList.remove('light', 'dark');
htmlElement.classList.add(savedTheme);
updateIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlElement.classList.remove('light', 'dark');
  htmlElement.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
});

function updateIcon(theme) {
  if (theme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

// Scroll reveal (fade-up)
const fadeElements = document.querySelectorAll('.fade-up');
function checkFade() {
  const windowHeight = window.innerHeight;
  const revealThreshold = 80;
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - revealThreshold) {
      el.classList.add('revealed');
    }
  });
}
window.addEventListener('load', checkFade);
window.addEventListener('scroll', checkFade);
setTimeout(checkFade, 200);

// Preline reinit
document.addEventListener('DOMContentLoaded', () => {
  if (window.HSStaticMethods) {
    window.HSStaticMethods.autoInit();
  }
});