// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }

  // Set active nav item
  const currentLocation = location.pathname;
  const menuItems = document.querySelectorAll('nav a');

  menuItems.forEach(item => {
    if (item.getAttribute('href') === currentLocation ||
        (currentLocation === '/' && item.getAttribute('href') === 'index.html')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Close mobile menu when clicking on a link
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      nav.classList.remove('active');
    });
  });

  // Language switcher for Privacy Policy
  const btnJa = document.getElementById('lang-ja');
  const btnEn = document.getElementById('lang-en');
  const contentJa = document.getElementById('privacy-ja');
  const contentEn = document.getElementById('privacy-en');

  if (btnJa && btnEn && contentJa && contentEn) {
    btnJa.addEventListener('click', function() {
      contentJa.style.display = 'block';
      contentEn.style.display = 'none';
      btnJa.classList.add('active');
      btnEn.classList.remove('active');
    });

    btnEn.addEventListener('click', function() {
      contentJa.style.display = 'none';
      contentEn.style.display = 'block';
      btnEn.classList.add('active');
      btnJa.classList.remove('active');
    });
  }
});
