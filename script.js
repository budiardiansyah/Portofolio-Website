document.addEventListener('DOMContentLoaded', function() {
    // 1. Mengaktifkan fungsi toggle untuk Pengalaman Lainnya
    const toggleButton = document.getElementById('toggle-experience');
    const additionalExperience = document.getElementById('additional-experience');

    if (toggleButton && additionalExperience) {
        // Logika untuk menampilkan/menyembunyikan pengalaman tambahan
        toggleButton.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah link pindah halaman

            if (additionalExperience.style.display === 'none' || additionalExperience.style.display === '') {
                // Tampilkan
                additionalExperience.style.display = 'block';
                toggleButton.textContent = 'Sembunyikan Pengalaman Lainnya...';
            } else {
                // Sembunyikan
                additionalExperience.style.display = 'none';
                toggleButton.textContent = 'Lihat Pengalaman Lainnya...';
            }
        });
    }

    // 2. Fungsi untuk smooth scrolling ketika navigasi di klik
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Offset 70px untuk fixed header
                const headerHeight = document.querySelector('header').offsetHeight; 
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight, 
                    behavior: 'smooth'
                });
            }
        });
    });
});
