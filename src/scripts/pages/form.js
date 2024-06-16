/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable radix */
/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import '../../styles/main.css';
import '../../styles/responsive.css';
import supabase from '../utils/supabase';

const renderForm = (container) => {
  const product = sessionStorage.getItem('product') || '';
  const price = sessionStorage.getItem('price') || '';
  const province = sessionStorage.getItem('province') || '';

  const parsePrice = (priceString) => {
    const numericString = priceString.replace(/[^\d]/g, '');
    return parseInt(numericString);
  };

  container.innerHTML = `
    <div class="form-container">
      <div class="form">
        <h2>Formulir Penyewaan</h2>
        <form id="order-form">
          <label for="name">Nama:</label>
          <input type="text" id="name" name="name" required>

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>

          <label for="address">Alamat:</label>
          <input type="text" id="address" name="alamat" required>

          <label for="phone">Nomor Telepon:</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{0,12}" required>
          <small id="phone-error" style="color: red;"></small>

          <label for="product">Produk:</label>
          <input type="text" id="product" name="produk" value="${product}" readonly>

          <label for="province">Provinsi:</label>
          <input type="text" id="province" name="provinsi" value="${province}" readonly>

          <label for="price">Harga per Hari:</label>
          <input type="text" id="price" name="harga" value="Rp${parseInt(price).toLocaleString()}" readonly>

          <label for="start-date">Tanggal Mulai Penyewaan:</label>
          <input type="date" id="start-date" name="start-date" required>

          <label for="end-date">Tanggal Akhir Penyewaan:</label>
          <input type="date" id="end-date" name="end-date" required>

          <button type="submit">Kirim</button>
        </form>
        <div id="message"></div>
      </div>
    </div>
  `;

  const form = container.querySelector('#order-form');
  const phoneInput = container.querySelector('#phone');
  const phoneError = container.querySelector('#phone-error');

  phoneInput.addEventListener('input', () => {
    if (phoneInput.value.length > 12) {
      phoneInput.value = phoneInput.value.slice(0, 12);
      phoneError.textContent = 'Nomor telepon maksimal 12 digit!';
    } else {
      phoneError.textContent = '';
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (phoneInput.value.length > 12) {
      phoneError.textContent = 'Nomor telepon maksimal 12 digit!';
      return;
    }

    const formData = new FormData(form);
    const startDate = new Date(formData.get('start-date'));
    const endDate = new Date(formData.get('end-date'));

    if (startDate > endDate) {
      showAlert('error', 'Tanggal mulai tidak boleh setelah tanggal akhir penyewaan!');
      return;
    }

    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const rentalDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    const totalHarga = parsePrice(price) * rentalDays;

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('alamat'),
      number_phone: formData.get('phone'),
      product: formData.get('produk'),
      province: formData.get('provinsi'),
      price: parsePrice(formData.get('harga')),
      total_price: totalHarga,
      start_date: formData.get('start-date'),
      end_date: formData.get('end-date'),

    };

    try {
      const { data: insertData, error } = await supabase
        .from('orders')
        .insert([data]);

      if (error) {
        throw error;
      }

      showAlert('success', `"Terima kasih telah mengisi formulir! 
        Pesanan untuk produk ${product} berhasil disimpan. 
        Tunggu konfirmasi melalui email atau telepon Anda."`);

      form.reset();
      sessionStorage.removeItem('product');
      sessionStorage.removeItem('price');
      sessionStorage.removeItem('province');
      phoneError.textContent = '';
    } catch (error) {
      container.querySelector('#message').innerHTML = `<p>Error: ${error.message}</p>`;
      showAlert('error', 'Terjadi kesalahan saat menyimpan data!');
      form.reset();
    }
  });

  const showAlert = (type, message) => {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${type}`;
    alertDiv.textContent = message;

    container.querySelector('.form-container').appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.remove();
    }, 10000);
  };
};

export { renderForm };
