/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import '../../styles/main.css';
import '../../styles/responsive.css';
import { renderForm } from './form';

const API_ENDPOINT = './data/data.json';

async function fetchPakaianAdatById(id) {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    const produk = data.pakaian_adat.find((item) => item.id.toString() === id);
    return produk;
  } catch (error) {
    console.error('Error fetching pakaian adat by id:', error);
    return null;
  }
}

const renderDetail = async () => {
  const mainContent = document.getElementById('content-main');
  const id = window.location.hash.split('/')[2];

  if (!id) {
    console.error('Product ID is missing in URL');
    return;
  }

  const produk = await fetchPakaianAdatById(id);

  if (!produk) {
    console.error('Product not found');
    return;
  }

  mainContent.innerHTML = `
    <div class="detail-container">
      <div class="detail-item">
        <img class="detail-img" src="${produk.pictureId}" alt="${produk.name}" title="${produk.name}">
        <div class="detail-info">
          <p class="detail-name">${produk.name}</p>
          <p class="detail-provinsi">Provinsi: ${produk.provinsi}</p>
          <p class="detail-harga">Harga: Rp${produk.harga.toLocaleString()} per hari</p>
          <p class="detail-deskripsi">${produk.deskripsi}</p>
          <button id="pesan-button" class="detail-pesan-button">Pesan</button>
        </div>
      </div>
    </div>
  `;

  const pesanButton = document.getElementById('pesan-button');
  pesanButton.addEventListener('click', () => {
    sessionStorage.setItem('product', produk.name);
    sessionStorage.setItem('price', produk.harga);
    sessionStorage.setItem('province', produk.provinsi);
    window.location.hash = `#/form/${produk.id}`;
  });
};

export { renderDetail };
