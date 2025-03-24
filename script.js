// Toggle Menu
function toggleMenu() {
    const navbarLinks = document.getElementById('navbar-links');
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar'); // Pastikan memilih elemen navbar

    navbarLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
   
}




// Fungsi untuk mendeteksi elemen yang muncul di layar
function checkFadeIn() {
    const fadeInElements = document.querySelectorAll('.fade-in-text');

    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

// Memanggil fungsi saat halaman dimuat dan saat di-scroll
window.addEventListener('load', checkFadeIn);
window.addEventListener('scroll', checkFadeIn);

window.onload = function () {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section) => {
        section.classList.add('visible');
    });
};
