/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
/* eslint-disable no-use-before-define */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-parens */
/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import '../../styles/main.css';
import '../../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const API_ENDPOINT = './data/data.json';

async function fetchPakaianAdatData() {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data.pakaian_adat;
  } catch (error) {
    console.error('Error fetching pakaian adat data:', error);
    return [];
  }
}

const renderProduk = async (container) => {
  sessionStorage.removeItem('selectedProductId');

  container.innerHTML = `
    <div class="search-container">
      <input type="text" id="search-input" placeholder="Search by province..." autocomplete="off">
    </div>
    <div id="pakaian-adat-list" class="pakaian-adat-list"></div>
    <button id="scroll-to-top" class="scroll-to-top"><i class="fas fa-arrow-up" title="scroll to top"></i></button>
  `;

  const pakaianAdatContainer = document.getElementById('pakaian-adat-list');
  const searchInput = document.getElementById('search-input');
  const scrollToTopButton = document.getElementById('scroll-to-top');
  let pakaianAdatList = await fetchPakaianAdatData();

  const displayPakaianAdat = (data) => {
    pakaianAdatContainer.innerHTML = '';
    data.forEach((pakaianAdat) => {
      pakaianAdatContainer.innerHTML += `
        <div class="pakaian-adat-item">
        <a href="#/detail/${pakaianAdat.id}" class="pakaian-adat-link" data-id="${pakaianAdat.id}"> 
          <img class="pakaian-adat-img lazyload" data-src="${pakaianAdat.pictureId}" alt="${pakaianAdat.name}" title="${pakaianAdat.name}">
          <div class="pakaian-adat-info">
            <p class="pakaian-adat-name">${pakaianAdat.name}</p>
            <p class="pakaian-adat-provinsi">Provinsi: ${pakaianAdat.provinsi}</p>
            <p class="pakaian-adat-harga">Harga: Rp${pakaianAdat.harga.toLocaleString()} per hari</p>
          </div>
          </a>
        </div>
      `;
    });
  };

  displayPakaianAdat(pakaianAdatList);

  searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = pakaianAdatList.filter(pakaianAdat => 
      pakaianAdat.provinsi.toLowerCase().includes(searchTerm)
    );
    displayPakaianAdat(filteredData);
  });

  window.addEventListener('scroll', handleScroll);
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  function handleScroll() {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = 'flex';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  }
};

export { renderProduk };