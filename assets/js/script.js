document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu a');

    // Toggle menu open/close when the hamburger icon is clicked
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  
    // Close menu when a menu item is clicked
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            menu.classList.remove('open');
            hamburger.classList.remove('open');
        });
    });
  
    // Close menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove('open');
            hamburger.classList.remove('open');
        }
    });

    // Smooth scroll when navigating to anchor links
    if (window.location.hash) {
        setTimeout(function() {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200); // Add slight delay for smoother scrolling
    }
});
