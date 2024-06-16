/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import '../../styles/main.css';
import '../../styles/responsive.css';

const renderAbout = (container) => {
  container.innerHTML = `
    <section class="about-section">
      <h2>SEPAKAT</h2>
      <h3>Sewa Pakaian Adat</h3>
      <p>Selamat datang di Sepakat, platform terbaik untuk sewa pakaian adat Indonesia. 
      Kami berdedikasi untuk menyediakan berbagai macam pakaian adat dari seluruh nusantara.</p>
      <p>Misi kami adalah untuk melestarikan dan memperkenalkan keanekaragaman budaya Indonesia melalui pakaian adat yang indah dan bermakna. 
      Kami bekerja sama dengan pengrajin lokal untuk memastikan kualitas dan keaslian produk kami.</p>
      <p>Terima kasih telah mengunjungi Sepakat. Kami berharap Anda menikmati pengalaman berbelanja dengan kami.</p>
    </section>
    <section class="team-section">
      <h2>Meet Our Developers</h2>
      <div class="team-grid">
        <div class="team-member">
          <img src="./images/team/adam.jpeg" alt="adam">
          <h3>Adam Ashari</h3>
          <p>Front End Web Developer</p>
          <div class="social-icons">
            <a href="https://youtube.com/@adamashari512?si=DWucGMyjGqXbYwiS"><i class="fab fa-github"></i></a>
            <a href="https://www.instagram.com/adammaulana.kap?igsh=bmd4YWVsc3hvZGY0">
            <i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/adam-maulana-khabibillah-ashari-putra-b4827b30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div class="team-member">
          <img src="./images/team/joni.jpeg" alt="joni">
          <h3>Joni Satrio Sembiring</h3>
          <p>Front End Web Developer</p>
          <div class="social-icons">
            <a href="https://www.instagram.com/noturrprince?igsh=MTZsajliZWR5cjF3Zw=="><i class="fab fa-github"></i></a>
            <a href="https://www.instagram.com/noturrprince?igsh=MTZsajliZWR5cjF3Zw==">
            <i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/joni-satrio-sembiring-576854279?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BD2i9K330SGSCv7cdRNcEJg%3D%3D">
            <i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div class="team-member">
          <img src="./images/team/gazhy.png" alt="ghazy">
          <h3>Moch Ghazy Al Ghifari H</h3>
          <p>Back End Web Developer</p>
          <div class="social-icons">
            <a href="https://www.youtube.com/channel/UCr23ysVyzu40bfSE69Q4ygg"><i class="fab fa-github"></i></a>
            <a href="https://www.instagram.com/putunembahsengut/">
            <i class="fab fa-instagram"></i></a>
            <a href="https://www.instagram.com/putunembahsengut/">
            <i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>
  `;
};

export { renderAbout };
