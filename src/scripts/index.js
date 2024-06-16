/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-duplicates */
/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import { initRouter } from './utils/router';
import { renderCurrentPage } from './utils/router';

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', (event) => {
  event.preventDefault();
  navLinks.classList.toggle('active');
});

window.addEventListener('load', () => {
  initRouter();
  renderCurrentPage();
  highlightActiveMenu();
  closeNav();
});

window.addEventListener('hashchange', () => {
  initRouter();
  renderCurrentPage();
  highlightActiveMenu();
  closeNav();
});

function highlightActiveMenu() {
  const hash = window.location.hash;
  const navItems = document.querySelectorAll('nav li');

  navItems.forEach((item) => {
    const link = item.querySelector('a');
    if (link.getAttribute('href') === hash) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  closeNav();
}

function closeNav() {
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
}
