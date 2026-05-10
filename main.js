// AEERNY — main.js
// Effet topbar au défilement, accordéon FAQ

document.addEventListener('DOMContentLoaded', function () {

  // === TOPBAR — EFFET AU DÉFILEMENT ===
  var topbar = document.getElementById('topbar');
  window.addEventListener('scroll', function () {
    if (!topbar) return;
    if (window.scrollY > 60) {
      topbar.classList.add('scrolled');
    } else {
      topbar.classList.remove('scrolled');
    }
  });

  // === ACCORDÉON FAQ ===
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      faqItems.forEach(function (i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

});