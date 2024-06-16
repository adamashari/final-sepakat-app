/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
import { renderHome } from '../pages/home';
import { renderProduk } from '../pages/produk';
import { renderAbout } from '../pages/about';
import { renderForm } from '../pages/form';
import { renderDetail } from '../pages/detail'; 

const routes = {
  '/': renderHome,
  '/home': renderHome,
  '/produk': renderProduk,
  '/about': renderAbout,
  '/form': renderForm,
  '/detail': renderDetail,
};

const initRouter = () => {
  const mainContent = document.getElementById('content-main');
  const hash = window.location.hash.split('?')[0];
  let path = hash.replace('#', '').split('/')[1];
  const id = hash.replace('#', '').split('/')[2];

  if (!path || !routes[`/${path}`]) {
    path = 'home';
    window.location.hash = `#/${path}`;
  }

  const render = routes[`/${path}`] || renderHome;

  mainContent.innerHTML = '';
  if (path === 'detail' || path === 'form') {
    sessionStorage.setItem('selectedProductId', id);
  }
  render(mainContent);
};

const renderCurrentPage = () => {
  const mainContainer = document.querySelector('#content-main');
  const hash = window.location.hash.split('?')[0];
  const path = hash.replace('#', '').split('/')[1];
  const id = hash.replace('#', '').split('/')[2];

  if (path === 'produk' || path === '' || path === '/') {
    renderProduk(mainContainer);
  } else if (path === 'about') {
    renderAbout(mainContainer);
  } else if (path === 'detail') {
    sessionStorage.setItem('selectedProductId', id);
    renderDetail(mainContainer);
  } else if (path === 'form') {
    sessionStorage.setItem('selectedProductId', id);
    renderForm(mainContainer);
  } else {
    renderHome(mainContainer);
  }
};

export { initRouter, renderCurrentPage };