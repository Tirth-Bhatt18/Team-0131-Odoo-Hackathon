// script.js - Common JavaScript for all pages

// Toggle dropdowns
document.addEventListener('DOMContentLoaded', function () {
    // Handle user menu dropdown
    const userMenus = document.querySelectorAll('.user-menu');
    userMenus.forEach(menu => {
        menu.addEventListener('click', function (e) {
            const dropdown = this.querySelector('.dropdown');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            e.stopPropagation();
        });
    });

    // Close dropdowns when clicking elsewhere
    document.addEventListener('click', function () {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    });
});