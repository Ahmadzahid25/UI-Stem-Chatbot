// Show button when user scrolls down 100px
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  btn.style.display = window.scrollY > 100 ? "block" : "none";
};

// Scroll to top smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
