document.addEventListener('DOMContentLoaded', function () {
    const navbarMenu = document.getElementById('navbarMenu');
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navbarLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        const isMobile = window.innerWidth < 992; // Bootstrap breakpoint: < 992px is mobile/tablet

        if (isMobile) {
          // Toggle buka/tutup pada mobile
          if (navbarMenu.classList.contains('show')) {
            // Dah buka, tutup
            new bootstrap.Collapse(navbarMenu).hide();
          } else {
            // Belum buka, buka
            new bootstrap.Collapse(navbarMenu).show();
          }
        } else {
          // Desktop: Tutup navbar bila klik
          if (navbarMenu.classList.contains('show')) {
            new bootstrap.Collapse(navbarMenu).hide();
          }
        }
      });
    });
});