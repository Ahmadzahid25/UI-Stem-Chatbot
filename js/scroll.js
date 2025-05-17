$(document).ready(function () {
    // Tatal automatik berdasarkan hash URL semasa muat halaman
    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100); // Kelewatan untuk muatan halaman
        }
    }

    // Mengendalikan klik pautan dengan kelas scroll-link
    $('.scroll-link').on('click', function (e) {
        const href = $(this).attr('href');
        // Jika pautan merujuk ke halaman lain, biarkan navigasi
        if (href.includes('.html')) {
            return;
        }
        // Jika pautan dalam halaman yang sama
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});