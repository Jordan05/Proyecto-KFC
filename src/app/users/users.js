document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.textContent = '☰';
    document.body.appendChild(menuToggle);
  
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('show');
    });
  });
  