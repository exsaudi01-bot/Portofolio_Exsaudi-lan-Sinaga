// Data penampung seluruh isi deskripsi portofolio
const portfolioData = {
    home: {
        title: "Home",
        description: "<p>Selamat datang di portofolio interaktif saya! Klik menu di atas untuk menjelajahi profil, pengalaman, keahlian teknis, dan informasi kontak saya.</p>"
    },
    aboutme: {
        title: "About Me",
        description: `
            <div class="about-container">
                <!-- FOTO PROFIL BERANIMASI -->
                <div class="profile-frame">
                    <img src="Images/foto1.jpg" alt="Foto Exsaudi Lan Sinaga" class="profile-img">
                </div>

                <!-- TEKS DESKRIPSI -->
                <div class="about-text">
                    <p><strong>Halo, Nama saya Exsaudi Lan Sinaga.</strong></p>
                    <p>Saya adalah lulusan <strong>S1 Teknik Elektro</strong> dari <strong>Institut Teknologi Sumatera</strong> dengan pengalaman profesional di bidang operasional pembangkit listrik, sistem kendali industri (PLC), serta manajemen proyek teknik.</p>
                    <p>Memiliki keahlian khusus sebagai <strong>Central Control Room (CCR) Operator</strong> pada PLTU 350 MW berbasis Distributed Control System (DCS), pengoperasian peralatan listrik, pemeliharaan preventif, serta penerapan standar K3/HSE (LOTO, PTW, Confined Space).</p>
                </div>
            </div>
        `
    },
    experience: {
        title: "Experience",
        description: `
            <div class="experience-item">
                <h3>Central Control Room (CCR) Operator</h3>
                <p class="job-company"><strong>PT. CCEPC – Dexin Steel Indonesia Power Plant (Morowali)</strong> | Jan 2025 – Jul 2026</p>
                
                <!-- CONTAINER UTAMA (TEKS + GAMBAR SAMPING) -->
                <div class="experience-content-wrapper">
                    <ul class="exp-list">
                        <li>Mengoperasikan dan memantau pembangkit listrik tenaga uap (PLTU) 350 MW dengan Distributed Control System (DCS) meliputi sistem Boiler, Turbin, dan Generator.</li>
                        <li>Melakukan manuver sakelar listrik (electrical switching), pengoperasian circuit breaker, katup manual di lapangan sesuai SOP keselamatan.</li>
                        <li>Melakukan inspeksi rutin, preventive dan corrective maintenance, analisis kondisi peralatan, serta pencatatan data operasional.</li>
                        <li>Menerapkan prosedur HSE/K3 secara ketat, termasuk Lockout/Tagout (LOTO), Permit to Work (PTW), APD, dan Confined Space Safety.</li>
                        <li>Berkoordinasi dengan tim operasional dan maintenance dalam identifikasi masalah, penanganan, dan eksekusi gangguan.</li>
                    </ul>

                    <!-- HIASAN FOTO BULAT DI SAMPING -->
                    <div class="experience-side-gallery">
                        <img src="Images/ccr1 (1).jpeg" alt="Dokumentasi CCR 1" class="exp-img-circle" onclick="openModal(this.src)">
                        <img src="Images/ccr1 (4).jpeg" alt="Dokumentasi CCR 2" class="exp-img-circle" onclick="openModal(this.src)">
                        <img src="Images/ccr1 (6).jpeg" alt="Dokumentasi CCR 3" class="exp-img-circle" onclick="openModal(this.src)">
                    </div>
                </div>
            </div>

            <hr class="divider">

            <div class="experience-item">
                <h3>Junior Engineer</h3>
                <p class="job-company"><strong>PT. Epcon Graha Guna (Palmerah)</strong> | Sep 2024 – Nov 2024</p>
                <ul>
                    <li>Mengelola dokumen proyek meliputi Project Approval, drawing, Material Approval, as-built drawing, test report, handover document, dan dokumen pendukung lainnya.</li>
                    <li>Berkoordinasi dengan Mechanical Engineer, Electrical Engineer, dan Project Manager terkait spesifikasi, kuantitas, material, serta kebutuhan proyek.</li>
                    <li>Memonitor progres pekerjaan lapangan dan memastikan pelaksanaan pemasangan mengacu pada gambar kerja dan spesifikasi teknis.</li>
                    <li>Mengatur agenda koordinasi internal dan dengan klien terkait perubahan drawing, spesifikasi material, serta progres pekerjaan.</li>
                    <li>Mendukung proses project handover dan pengarsipan dokumen untuk kebutuhan maintenance dan after-sales.</li>
                </ul>
            </div>

            <hr class="divider">

            <div class="experience-item">
                <h3>Project Engineer (Project-Based)</h3>
                <p class="job-company"><strong>CV. Elastika Teknika (Cikarang)</strong> | Jun 2024 – Aug 2024</p>
                
                <!-- PEMBUNGKUS UTAMA UNTUK MENJAJARKAN TEKS & GAMBAR -->
                <div class="experience-content-wrapper">
                    <ul class="exp-list">
                        <li>Berpartisipasi dalam pelaksanaan proyek fabrikasi dan assembly 3 unit mesin rotator, mulai dari persiapan, perakitan, wiring, instalasi, hingga commissioning.</li>
                        <li>Menyusun dan melakukan penyesuaian gambar mekanikal dan elektrikal menggunakan AutoCAD sebagai acuan fabrikasi, perakitan, dan instalasi mesin.</li>
                        <li>Melakukan control panel assembly, electrical wiring, dan instalasi komponen kelistrikan sesuai drawing dan spesifikasi teknis proyek.</li>
                        <li>Melakukan programming dan testing PLC Mitsubishi serta melakukan troubleshooting pada sistem kontrol untuk memastikan mesin beroperasi sesuai kebutuhan.</li>
                        <li>Membantu proses installation, commissioning, functional testing, dan troubleshooting 3 unit mesin di lokasi proyek.</li>
                        <li>Menyusun dokumentasi teknis dan manual book, termasuk prosedur pengoperasian, pemeliharaan, dan basic troubleshooting mesin.</li>
                    </ul>

                    <!-- GALERI FOTO CV ELASTIKA -->
                    <div class="experience-side-gallery">
                        <img src="Images/CV1.jpg" alt="Dokumentasi CV Elastika 1" class="exp-img-circle" onclick="openModal(this.src)">
                        <img src="Images/CV2.jpg" alt="Dokumentasi CV Elastika 2" class="exp-img-circle" onclick="openModal(this.src)">
                        <img src="Images/CV3.jpg" alt="Dokumentasi CV Elastika 3" class="exp-img-circle" onclick="openModal(this.src)">
                        <img src="Images/CV4.jpg" alt="Dokumentasi CV Elastika 4" class="exp-img-circle" onclick="openModal(this.src)">
                    </div>
                </div> <!-- PERBAIKAN: Menambahkan tag penutup div wrapper -->
            </div>

            <hr class="divider">

            <div class="experience-item">
                <h3>Maintenance Technician Intern</h3>
                <p class="job-company"><strong>PT. PLN UPT Pematang Siantar</strong> | Jul 2022 – Aug 2022</p>
                
                <!-- PEMBUNGKUS UTAMA PLN -->
                <div class="experience-content-wrapper">
                    <ul class="exp-list">
                        <li>Mendukung tim maintenance dalam inspeksi dan pemeriksaan peralatan listrik pada Gardu Induk 150 kV.</li>
                        <li>Melaksanakan pengujian isolasi pada transformator serta membantu pemeliharaan ringan pada sistem proteksi.</li>
                        <li>Menerapkan prosedur keselamatan kerja dalam aktivitas pemeliharaan pada area tegangan tinggi.</li>
                        <li>Menyusun laporan inspeksi harian dan melakukan dokumentasi kondisi peralatan.</li>
                    </ul>

                    <!-- GALERI 1 FOTO PLN -->
                    <div class="experience-side-gallery">
                        <img src="Images/PLN1.jpg" alt="Dokumentasi PLN 1" class="exp-img-circle" onclick="openModal(this.src)">
                    </div>
                </div>
            </div>
        `
    },
skills: {
        title: "Skills",
        description: `
            <div class="skills-container">
                <!-- PEMBUNGKUS UTAMA UNTUK MENJAJARKAN TEKS (KIRI) DAN GAMBAR (KANAN) -->
                <div class="experience-content-wrapper">
                    <div class="skills-text-group">
                        <div class="skill-category">
                            <h3>⚡ Power Plant & DCS Operation</h3>
                            <ul>
                                <li>DCS Operation & Monitoring (350 MW Steam Power Plant)</li>
                                <li>Boiler, Turbine, & Generator System Operations</li>
                                <li>Electrical Switching, Circuit Breaker & Panel Maneuvering</li>
                                <li>Preventive & Corrective Maintenance, Equipment Monitoring</li>
                            </ul>
                        </div>

                        <div class="skill-category" style="margin-top: 20px;">
                            <h3>⚙️ Industrial Automation & Engineering Tools</h3>
                            <ul>
                                <li>PLC Programming & Troubleshooting (Mitsubishi PLC)</li>
                                <li>Control Panel Wiring & Electrical Maintenance</li>
                                <li>AutoCAD (Mechanical & Electrical Drawings)</li>
                                <li>SCADA / HMI & ETAP Basics</li>
                            </ul>
                        </div>

                        <div class="skill-category" style="margin-top: 20px;">
                            <h3>🛡️ HSE & Industrial Safety Standards</h3>
                            <ul>
                                <li>Lockout / Tagout (LOTO) & Permit to Work (PTW)</li>
                                <li>Confined Space Safety & Usage of PPE</li>
                                <li>Pelatihan Teori & Keterampilan Kelistrikan (Dexin Training Center)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- GALERI 4 FOTO DI SAMPING KANAN -->
                    <div class="experience-side-gallery">
                        <img src="Images/skill1.jpg" alt="Dokumentasi Skill 1" class="exp-img-circle" onclick="openModal(this.src)">
                        <img src="Images/skill2.jpg" alt="Dokumentasi Skill 2" class="exp-img-circle" onclick="openModal(this.src)">
                        <img src="Images/skill3.jpg" alt="Dokumentasi Skill 3" class="exp-img-circle" onclick="openModal(this.src)">
                        <img src="Images/skill4.jpg" alt="Dokumentasi Skill 4" class="exp-img-circle" onclick="openModal(this.src)">
                        <img src="Images/CV3.jpg" alt="Dokumentasi Skill 4" class="exp-img-circle" onclick="openModal(this.src)">
                    </div>
                </div>
            </div>
        `
    },    project: {
        title: "Project",
        description: `
            <div class="experience-item">
                <h3>Rotator Machines Assembly & PLC Programming</h3>
                <p class="job-company"><strong>CV. Elastika Teknika</strong></p>
                <p>Merancang gambar skematik via AutoCAD, melakukan perakitan panel listrik, wiring komponen, dan memprogram PLC Mitsubishi untuk 3 unit mesin rotator industri hingga tahap commissioning.</p>
            </div>

            <hr class="divider">

            <div class="experience-item">
                <h3>Data Processing System on Automated Room Temperature for Food Safety (ARTFOODS)</h3>
                <p class="job-company"><strong>Tugas Akhir - Institut Teknologi Sumatera</strong></p>
                <p>Proyek sistem pemrosesan data otomatisasi suhu ruangan berbasis pengontrol cerdas untuk menjamin keamanan dan kualitas penyimpanan produk pangan.</p>
            </div>
        `
    },
    education: {
        title: "Education",
        description: `
            <div class="experience-item">
                <h3>S1 Teknik Elektro (Bachelor’s Degree in Electrical Engineering)</h3>
                <p class="job-company"><strong>Institut Teknologi Sumatera</strong> | Aug 2019 – Jun 2024</p>
                <p><strong>Tugas Akhir:</strong> Data Processing System on Automated Room Temperature for Food Safety (ARTFOODS)</p>
            </div>

            <hr class="divider">

            <div class="experience-item">
                <h3>Pelatihan Pengetahuan Teori & Keterampilan Kelistrikan</h3>
                <p class="job-company"><strong>PT. Dexin Steel Indonesia – Dexin Training Center</strong> | Sep 2025 – Oct 2025</p>
                <p>Pelatihan resmi sertifikasi internal kelistrikan industri dan keselamatan operasional pembangkit.</p>
            </div>
        `
    },
cv: {
        title: "Download CV",
        description: `
            <div style="text-align: center; padding: 20px 0;">
                <p style="margin-bottom: 20px; color: #f1f5f9;">Anda dapat melihat dan mengunduh berkas Curriculum Vitae (CV) resmi saya dalam format PDF melalui tombol di bawah ini:</p>
                
                <!-- ATRIBUT download DITAMBAHKAN AGAR LANGSUNG TERUNDUH -->
                <a href="CV_Exsaudi.pdf" download="CV_Exsaudi.pdf" target="_blank" style="background: #38bdf8; color: #0f172a; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 8px; display: inline-block; box-shadow: 0 4px 10px rgba(56, 189, 248, 0.3);">📄 Unduh CV Exsaudi (PDF)</a>
            </div>
        `
    },
    contact: {
        title: "Contact",
        description: `
            <div class="skills-container">
                <p>Silakan hubungi saya melalui kontak di bawah ini untuk peluang kerja sama maupun diskusi teknis:</p>
                <ul style="line-height: 2; margin-left: 20px;">
                    <li><strong>📍 Lokasi:</strong> Bekasi, Indonesia</li>
                    <li><strong>📱 WhatsApp / Telp:</strong> <a href="https://wa.me/6285750793493" target="_blank" style="color: #38bdf8;">085750793493</a></li>
                    <li><strong>✉️ Email:</strong> <a href="mailto:exsaudi01@gmail.com" style="color: #38bdf8;">exsaudi01@gmail.com</a></li>
                </ul>
            </div>
        `
    }
};

// Fungsi logika klik tombol
function showContent(categoryKey, element) {
    const titleElement = document.getElementById('content-title');
    const descElement = document.getElementById('content-desc');

    if (portfolioData[categoryKey]) {
        titleElement.innerHTML = portfolioData[categoryKey].title;
        descElement.innerHTML = portfolioData[categoryKey].description;
    }

    const allButtons = document.querySelectorAll('.nav-btn');
    allButtons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    
    if (element) {
        element.classList.add('active');
    }
}

// FUNGSI UNTUK MEMBUKA DAN MENUTUP MODAL FOTO FULLSCREEN
function openModal(imageSrc) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}