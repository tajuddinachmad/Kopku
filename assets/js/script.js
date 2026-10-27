// 1. Tanggal dan waktu, diperbarui setiap detik
function tampilkanWaktu() {
  var el = document.getElementById('tanggal-waktu');
  if (!el) return;
  var sekarang = new Date();
  var tanggal = sekarang.toLocaleDateString('id-ID', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
  el.textContent = tanggal + ' \u2022 ' + sekarang.toLocaleTimeString('id-ID');
}
tampilkanWaktu();
setInterval(tampilkanWaktu, 1000);

// 2. Validasi form: kolom wajib harus terisi dan angka harus valid
document.querySelectorAll('form.form-validasi').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var pesan = form.querySelector('.pesan');
    var adaError = false;

    form.querySelectorAll('input, select, textarea').forEach(function (kolom) {
      var salah = !kolom.checkValidity() || (kolom.required && kolom.value.trim() === '');
      kolom.classList.toggle('invalid', salah);
      if (salah) adaError = true;
    });

    if (adaError) {
      pesan.className = 'pesan error';
      pesan.textContent = 'Mohon lengkapi semua kolom yang wajib diisi dengan benar.';
      return;
    }

    if (form.id === 'form-login') {
      window.location.href = 'dashboard.html'; // simulasi, diganti PHP di Milestone 3
      return;
    }

    pesan.className = 'pesan sukses';
    pesan.textContent = 'Data valid. Penyimpanan ke database dibuat di Milestone 5.';
    form.reset();
  });
});

// 3. Pencarian sederhana pada tabel
document.querySelectorAll('[data-cari]').forEach(function (kotak) {
  kotak.addEventListener('input', function () {
    var kata = kotak.value.toLowerCase();
    document.querySelectorAll(kotak.dataset.cari + ' tbody tr').forEach(function (baris) {
      baris.style.display = baris.textContent.toLowerCase().includes(kata) ? '' : 'none';
    });
  });
});

// 4. Konfirmasi hapus (simulasi: baris hilang di layar saja, belum menyentuh database)
document.querySelectorAll('.btn-hapus').forEach(function (tombol) {
  tombol.addEventListener('click', function () {
    if (confirm('Yakin ingin menghapus data ini?')) {
      tombol.closest('tr').remove();
    }
  });
});
