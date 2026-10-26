// 1. Fitur Jam Real-time
function updateClock() {
    const clockElement = document.getElementById('live-clock');
    if (clockElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        };
        clockElement.innerText = now.toLocaleDateString('id-ID', options);
    }
}
setInterval(updateClock, 1000);
updateClock();

// 2. Validasi Input Form Ringan
function validateForm() {
    const nama = document.getElementById('nama_bahan').value;
    const jumlah = document.getElementById('jumlah_stok').value;
    
    if (nama.trim() === "" || jumlah.trim() === "") {
        alert("Peringatan: Semua field wajib diisi!");
        return false;
    }
    alert("Data berhasil disimpan (Statis)!");
    return true;
}