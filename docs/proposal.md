# Proposal Proyek Kopku — Milestone 1

## 1. Identitas Proyek
- **Nama:** Kopku — Aplikasi Kasir dan Stok Sederhana
- **Mata kuliah:** Pemrograman Berbasis Web (PBL)
- **Tahap:** Milestone 1 — perencanaan dan rancangan awal

## 2. Latar Belakang
Kedai kopi kecil dapat menghadapi kendala saat mencatat transaksi dan memantau stok menggunakan buku atau nota. Pencatatan manual membuat data lebih sulit dicari, meningkatkan risiko salah hitung, dan dapat menyebabkan jumlah stok pada catatan berbeda dari stok sebenarnya. Pemilik yang tidak selalu berada di kedai juga membutuhkan cara praktis untuk melihat ringkasan penjualan.

Kopku direncanakan sebagai aplikasi web sederhana untuk membantu pencatatan penjualan, pengelolaan produk, pemantauan stok, dan penyajian ringkasan penjualan.

## 3. Rumusan Masalah
1. Bagaimana membantu kasir mencatat transaksi dengan lebih terstruktur?
2. Bagaimana membantu menjaga konsistensi catatan stok produk?
3. Bagaimana menyajikan ringkasan penjualan yang mudah dipahami pemilik?
4. Bagaimana membatasi akses berdasarkan kebutuhan admin/kasir dan pemilik?

## 4. Tujuan
- Mendigitalisasi pencatatan transaksi penjualan.
- Menyediakan pengelolaan kategori, produk, dan stok.
- Merencanakan penghitungan total transaksi dan pembaruan stok secara konsisten.
- Menyediakan dashboard ringkasan untuk mendukung pemantauan operasional.

## 5. Target Pengguna
**Admin/Kasir:** mengelola kategori dan produk, memperbarui stok, mencatat transaksi, dan meninjau riwayat transaksi sesuai hak akses.

**Pemilik:** melihat ringkasan penjualan dan stok. Rancangan awal menempatkan akses pemilik sebagai akses pemantauan/baca.

## 6. Rencana Fitur
1. Login, logout, dan sesi pengguna.
2. Dashboard ringkasan produk, stok, transaksi harian, dan penjualan.
3. Pengelolaan kategori produk.
4. Pengelolaan produk dan stok.
5. Pencatatan transaksi dan detail item.
6. Perhitungan kuantitas, harga, subtotal, dan total.
7. Pengurangan stok setelah transaksi berhasil disimpan.
8. Form tambah/edit dan konfirmasi penghapusan.
9. Pencarian/filter dan pagination menggunakan jQuery AJAX.
10. Tampilan tanggal dan waktu.

Fitur opsional: peringatan stok menipis dan cetak struk sederhana.

## 7. Batasan
- Fokus awal adalah produk yang dijual per unit.
- Pengelolaan bahan baku berbasis resep tidak termasuk ruang lingkup awal.
- Daftar fitur adalah rencana kebutuhan, bukan bukti bahwa fitur sudah diimplementasikan.
- Milestone 1 tidak perlu diperluas ke ERD apabila belum diminta panduan tugas.

## 8. Teknologi yang Direncanakan
HTML, CSS, JavaScript, PHP Native, MySQL/MariaDB, jQuery AJAX, Git, dan GitHub. Stack akhir mengikuti ketentuan dosen dan keputusan kelompok.

## 9. Rancangan Antarmuka
Desain Figma kelompok yang sudah ada tetap digunakan, tidak dibuat ulang:
https://www.figma.com/make/WRgAqIMfwf1VYrMWDuww2E/Redesign-Kopku-POS-Interface?fullscreen=1&t=i5cfjRPlhNYbTuTP-1&code-node-id=0-6
Lihat [wireframe.md](wireframe.md) untuk pemetaan kebutuhan.

## 10. Rencana Pengerjaan Milestone 1
- Menyepakati tujuan, pengguna, fitur, dan batasan.
- Memastikan tautan desain dan aset yang ada tercatat.
- Merapikan README dan dokumentasi.
- Memastikan struktur repository awal mudah dipahami.
- Membuat sedikitnya tiga commit bermakna sesuai ketentuan tugas.
- Meninjau hasil bersama anggota kelompok.

## 11. Indikator Penyelesaian
- Latar belakang, target pengguna, fitur, dan batasan dijelaskan.
- Rancangan antarmuka yang sudah ada dapat diakses.
- Repository memiliki struktur awal dan README yang jelas.
- Riwayat Git menunjukkan kontribusi bermakna sesuai instruksi perkuliahan.
