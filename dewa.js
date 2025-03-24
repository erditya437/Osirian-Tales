document.addEventListener("DOMContentLoaded", function () {
    const lihatLinks = document.querySelectorAll(".dewa-item .btn");

    lihatLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah langsung pindah halaman

            const halaman = this.getAttribute("href"); // Simpan URL tujuan

            // Cek jika overlay sudah ada, hapus dulu
            if (document.querySelector(".loading-overlay")) {
                document.querySelector(".loading-overlay").remove();
            }

            // Buat overlay loading
            const loadingOverlay = document.createElement("div");
            loadingOverlay.classList.add("loading-overlay");
            loadingOverlay.innerHTML = `
                <div class="loading-content">
                    <img src="aset/pngwing.com.png" class="loading-bird" alt="Burung Horus">
                    <p>Memuat halaman...</p>
                </div>
            `;

            // Tambahkan ke body
            document.body.appendChild(loadingOverlay);

            // Tunggu 2 detik sebelum pindah halaman
            setTimeout(() => {
                window.location.href = halaman;
            }, 2000);
        });
    });
});






