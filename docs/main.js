const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
const yearSpan = document.getElementById('current-year');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.getAttribute('data-open') === 'true';
    const nextState = (!isOpen).toString();
    navLinks.setAttribute('data-open', nextState);
    navToggle.setAttribute('aria-expanded', nextState);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.setAttribute('data-open', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
