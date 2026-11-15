# Tugas Praktik Pipeline CI - Rekayasa Perangkat Lunak

Repositori ini berisi implementasi pipeline **Continuous Integration (CI)** menggunakan **GitHub Actions** untuk menjalankan proses instalasi dependensi dan pengujian otomatis (*unit testing*) berbasis Node.js.

## Anggota Kelompok
1. **Mohammad Rizky Laudjeng** (`F5512510019`)
2. **Septiyanti Suci Ramandani** (`F5512510028`)
3. **Aziza Hijran** (`F5512520040`)

## Pembagian Peran Tim
- **Mohammad Rizky Laudjeng (`F5512510019`):** Inisialisasi repositori GitHub, pembuatan fungsi aplikasi (`calculator.js`), serta konfigurasi workflow `.github/workflows/ci.yml`.
- **Septiyanti Suci Ramandani (`F5512510028`):** Pembuatan skrip pengujian otomatis (`calculator.test.js`) dan verifikasi pengujian di lingkungan lokal.
- **Aziza Hijran (`F5512520040`):** Eksekusi simulasi *error*, analisis log kegagalan CI, perbaikan *bug*, serta penyusunan dokumentasi laporan dan `README.md`.

## Cara Menjalankan Pengujian Secara Lokal
1. Pastikan **Node.js** (versi 20 atau terbaru) sudah terpasang di perangkat.
2. Instal dependensi proyek:
   ```bash
   npm install