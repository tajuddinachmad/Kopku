# Panduan Kolaborasi Git — Kopku

## 1. Repository Utama
https://github.com/tajuddinachmad/Kopku

Koordinasikan perubahan dengan pemilik repository dan anggota kelompok. Jangan menimpa pekerjaan orang lain atau mengubah desain Figma yang sudah disepakati tanpa persetujuan.

## 2. Alur Kerja
1. Sinkronkan branch utama.
2. Buat branch khusus untuk satu pekerjaan.
3. Edit file dan tinjau perubahan.
4. Commit dengan pesan yang menjelaskan perubahan.
5. Push branch dan ajukan Pull Request jika kelompok menggunakan PR.
6. Minta anggota lain meninjau sebelum perubahan digabungkan.

Contoh membuat branch:
```bash
git switch main
git pull origin main
git switch -c docs/milestone-1
```

Setelah mengedit:
```bash
git status
git add README.md docs/
git commit -m "docs: rapikan dokumentasi milestone 1"
git push -u origin docs/milestone-1
```

Jika tidak memiliki izin push, fork repository atau minta pemilik menambahkan akses kolaborator. Jangan berbagi password atau token GitHub.

## 3. Contoh Pembagian Area
| Area | Hasil kerja |
|---|---|
| Dokumentasi | README, proposal, batasan, dan daftar fitur |
| Review desain | Memeriksa Figma yang sudah ada dan melengkapi tautan/screenshot |
| Struktur repository | Memastikan direktori awal dan `.gitignore` sesuai |
| Review/integrasi | Meninjau perubahan dan menyelesaikan konflik |

Pembagian ini adalah usulan untuk disepakati, bukan klaim pembagian resmi kelompok.

## 4. Contoh Tiga Commit Bermakna
Gunakan hanya jika perubahan tersebut benar-benar dilakukan:
```text
docs: perbarui README proyek Kopku
docs: tambahkan proposal dan batasan proyek
docs: dokumentasikan wireframe dan alur kolaborasi
```

Jangan membuat commit palsu hanya untuk memenuhi jumlah. Setiap commit sebaiknya fokus pada satu perubahan yang dapat ditinjau.

## 5. Sebelum Merge
- Perubahan tidak menghapus file anggota lain.
- Tautan Figma masih benar dan dapat diakses.
- README tidak mengklaim fitur yang belum diimplementasikan.
- Dokumentasi sesuai ruang lingkup Milestone 1.
- Konflik Git sudah diselesaikan dan perubahan ditinjau.
