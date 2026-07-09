# SuaraSiswa

Website evaluasi Program Kerja OSIS dan ruang aspirasi siswa dengan tampilan modern terinspirasi Google Play Store dan Material Design.

## Cara Membuka

Buka file `index.html` langsung di browser.

## Isi Proyek

- `index.html` - struktur halaman Home, Program Kerja, Detail Program, Aspirasi, Tentang, dan Admin.
- `styles.css` - desain responsif, light mode, dark mode, card, animasi, skeleton loading, dan dashboard.
- `app.js` - interaksi website, pencarian, filter, rating wajib alasan, ulasan, aspirasi, statistik, dan admin sederhana.
- `supabase-guide.md` - tutorial membuat backend Supabase, tabel, policy, dan contoh integrasi.

## Catatan Publikasi

Versi ini sudah bisa dipakai sebagai prototipe publik berbasis browser dengan penyimpanan sementara `localStorage`. Untuk produksi sekolah, hubungkan form dan dashboard ke Supabase sesuai panduan di `supabase-guide.md`, lalu batasi akses admin memakai Supabase Auth.
