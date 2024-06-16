/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import '../../styles/main.css';
import '../../styles/responsive.css';

const renderHome = (container) => {
  container.innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <h2>Selamat Datang di Sepakat</h2>
        <p>Platform terbaik untuk sewa pakaian adat dari seluruh Indonesia</p>
      </div>
    </section>

    <section class="features">
      <div class="feature">
        <img src="./images/icon/choice.png" alt="choice">
        <h3>Beragam Pilihan</h3>
        <p>Kami menawarkan berbagai macam pakaian adat dari berbagai provinsi di Indonesia.</p>
      </div>

      <div class="feature">
        <img src="./images/icon/premium-quality.png" alt="premium-quality">
        <h3>Kualitas Terbaik</h3>
        <p>Pakaian adat yang kami tawarkan dibuat dengan bahan berkualitas tinggi.</p>
      </div>

      <div class="feature">
        <img src="./images/icon/price.png" alt="price">
        <h3>Harga Terjangkau</h3>
        <p>Dapatkan pakaian adat dengan harga yang sangat bersaing.</p>
      </div>
    </section>

    <section class="product-container">
    <div class="product">
      <div class="product-item">
        <img src="./images/baju/ulee_balang_aceh.webp" alt="Ulee Balang" title="Ulee Balang">
      <div class="product-info">
        <p class="name">Ulee Balang</p>
        <p class="provinsi">Provinsi: Aceh</p>
        <p class="harga">Harga: Rp200,000 per hari</p>
      </div>
      </div>

      <div class="product-item">
        <img src="./images/baju/bundo_kanduang_sumatera_barat.webp" alt="Bundo Kanduang" title="Bundo Kanduang">
      <div class="product-info">
        <p class="name">Bundo Kanduang</p>
        <p class="provinsi">Provinsi: Sumatera Barat</p>
        <p class="harga">Harga: Rp200,000 per hari</p>
      </div>
      </div>

      <div class="product-item">
        <img src="./images/baju/baju_betabur_bengkulu.jpg" alt="Baju Betabur" title="Baju Betabur">
      <div class="product-info">
        <p class="name">Baju Betabur</p>
        <p class="provinsi">Provinsi: Bengkulu</p>
        <p class="harga">Harga: Rp150,000 per hari</p>
      </div>
      </div>

      <div class="product-item">
        <img src="./images/baju/taa_sapei_sapaq_kalimantan_utara.jpeg" alt="Taa Sapei Sapaq" title="Taa Sapei Sapaq">
      <div class="product-info">
        <p class="name">Taa Sapei Sapaq</p>
        <p class="provinsi">Provinsi: Kalimantan Utara</p>
        <p class="harga">Harga: Rp200,000 per hari</p>
      </div>
      </div>
    </div>

    <div class="see-all-div">
        <a href="#/produk" class="button-see-all">see all ➔</a>
    </div>
    </section>

    <section class="sponsor-container">
      <h3 class="sponsor-title">Supported by</h3>
      <div class="sponsor">
        <img src="./images/icon/msib.png" alt="msib" title="MSIB">
        <img src="./images/icon/dicoding.png" alt="dicoding" title="Dicoding">
        <img src="./images/icon/km.png" alt="km" title="Kampus Merdeka">
      </div>
    </section>
  `;
};

export { renderHome };