const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav ul.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
