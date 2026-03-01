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
});

