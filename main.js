// AEERNY — main.js
// Topbar scroll effect, FAQ accordion, contact form

document.addEventListener('DOMContentLoaded', function () {

  // === TOPBAR SCROLL ===
  var topbar = document.getElementById('topbar');
  window.addEventListener('scroll', function () {
    if (!topbar) return;
    if (window.scrollY > 60) {
      topbar.classList.add('scrolled');
    } else {
      topbar.classList.remove('scrolled');
    }
  });

  // === FAQ ACCORDION ===
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

  // === CONTACT FORM ===
  var form = document.getElementById('contactForm');
  var successMsg = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(function () {
        form.reset();
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
        if (successMsg) successMsg.classList.add('visible');
        setTimeout(function () {
          if (successMsg) successMsg.classList.remove('visible');
        }, 5000);
      }, 1200);
    });
  }

});