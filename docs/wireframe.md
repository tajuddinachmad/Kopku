# Wireframe Kopku

**Tautan Figma:** [Lihat Desain Kopku](https://www.figma.com/design/yffhptu8cIXB6LpsbnXrpI/Untitled?node-id=0-1&p=f&t=ueUEJbpID5phxeNy-0)

## 1. Halaman Login

```text
+------------------------------------------------------+
|                       KOPKU                          |
|             Sistem Kasir Kedai Kopi                  |
|                                                      |
|                  Silakan Masuk                       |
|                                                      |
|              +------------------------+              |
|              | Username                |              |
|              +------------------------+              |
|              | Password                |              |
|              +------------------------+              |
|              |         MASUK          |              |
|              +------------------------+              |
|                                                      |
+------------------------------------------------------+
```

**Elemen utama:**
- Identitas aplikasi Kopku POS dan deskripsi singkat.
- Input username dan password.
- Tombol masuk untuk mengakses sistem.
- Autentikasi pengguna sesuai hak akses yang direncanakan.

## 2. Halaman Dashboard

```text
+----------------------------------------------------------------+
| KOPKU POS                 Dashboard             [Nama Pengguna] |
+------------------+---------------------------------------------+
| Navigasi         | Ringkasan                                   |
|                  |                                             |
| - Dashboard      | +------------+ +------------+ +------------+|
| - Produk         | | Total      | | Stok       | | Penjualan  ||
| - Kategori       | | Produk     | | Tersedia   | | Hari Ini   ||
| - Transaksi      | +------------+ +------------+ +------------+|
|                  |                                             |
|                  | Peringatan Stok Menipis                     |
|                  | +-----------------------------------------+ |
|                  | | Nama Produk             | Sisa Stok     | |
|                  | +-----------------------------------------+ |
|                  |                                             |
|                  | Transaksi Terbaru                           |
|                  | +-----------------------------------------+ |
|                  | | Tanggal | No. Transaksi | Total         | |
|                  | +-----------------------------------------+ |
+------------------+---------------------------------------------+
```

**Elemen utama:**
- Navigasi ke dashboard, produk, kategori, dan transaksi.
- Ringkasan jumlah produk, ketersediaan stok, dan penjualan hari ini.
- Informasi produk dengan stok menipis.
- Daftar transaksi terbaru.
- Identitas pengguna yang sedang masuk.

## 3. Halaman Daftar Produk

```text
+----------------------------------------------------------------+
| KOPKU POS                 Data Produk                           |
+------------------+---------------------------------------------+
| Navigasi         | Manajemen Produk            [+ Tambah Produk]|
|                  |                                             |
| - Dashboard      | [Cari nama produk.........................] |
| - Produk         | [Filter Kategori v] [Filter Stok v]          |
| - Kategori       |                                             |
| - Transaksi      | +-----------------------------------------+ |
|                  | | Nama | Kategori | Harga | Stok | Aksi   | |
|                  | +-----------------------------------------+ |
|                  | | ...  | ...      | ...   | ...  | Edit   | |
|                  | | ...  | ...      | ...   | ...  | Hapus  | |
|                  | +-----------------------------------------+ |
|                  |           [Sebelumnya] [1] [Berikutnya]     |
+------------------+---------------------------------------------+
```

**Elemen utama:**
- Judul halaman dan tombol tambah produk.
- Kolom pencarian produk.
- Filter kategori dan status stok.
- Tabel produk yang memuat nama, kategori, harga, stok, dan aksi.
- Tombol edit dan hapus.
- Pagination untuk berpindah halaman data.

## 4. Formulir Tambah/Edit Produk

```text
+------------------------------------------------------+
| KOPKU POS              Form Produk                    |
+------------------------------------------------------+
| Nama Produk       [____________________________]     |
|                                                      |
| Kategori          [Pilih kategori              v]    |
|                                                      |
| Harga             [Rp ________________________]     |
|                                                      |
| Jumlah Stok       [____________________________]     |
|                                                      |
| Gambar Produk     [Pilih File]                       |
|                                                      |
|             [Simpan]  [Batal/Kembali]                |
+------------------------------------------------------+
```

**Elemen utama:**
- Input nama produk.
- Pilihan kategori produk.
- Input harga produk.
- Input jumlah stok.
- Pilihan gambar produk jika diperlukan dalam implementasi.
- Tombol simpan dan batal.

Formulir ini direncanakan untuk menambah produk baru maupun mengubah data produk yang sudah tersedia.

## 5. Halaman Transaksi Kasir

```text
+----------------------------------------------------------------+
| KOPKU POS                 Transaksi Kasir                       |
+------------------+---------------------------------------------+
| Navigasi         | Daftar Produk             Pesanan            |
|                  | [Cari produk........]     +---------------+ |
| - Dashboard      |                           | Nama Produk   | |
| - Produk         | +----------+ +----------+ | Qty | Harga   | |
| - Kategori       | | Produk A | | Produk B | |---------------| |
| - Transaksi      | | Rp ...   | | Rp ...   | | Produk A      | |
|                  | +----------+ +----------+ |---------------| |
|                  | +----------+ +----------+ | Total: Rp ... | |
|                  | | Produk C | | Produk D | |               | |
|                  | | Rp ...   | | Rp ...   | | [Bayar]       | |
|                  | +----------+ +----------+ +---------------+ |
+------------------+---------------------------------------------+
```

**Elemen

## Pemetaan ke Kebutuhan Milestone 1
| Layar inti | Tujuan | Elemen yang perlu diperiksa pada desain |
|---|---|---|
| Login | Membatasi akses pengguna | Input identitas pengguna, kata sandi, tombol masuk, dan validasi jika dirancang |
| Dashboard | Memberi gambaran kondisi kedai | Ringkasan produk/stok/penjualan dan navigasi utama |
| Daftar produk | Memudahkan melihat data produk | Daftar/tabel, stok, harga, pencarian atau filter bila tersedia |
| Form produk | Input atau perubahan produk | Nama produk, kategori, harga, stok, dan tombol simpan/batal bila tersedia |
