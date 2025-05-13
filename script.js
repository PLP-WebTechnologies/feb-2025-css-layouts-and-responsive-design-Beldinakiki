document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        // Toggle nav
        nav.classList.toggle('nav-active');
        
        // Burger animation
        burger.classList.toggle('toggle');
    });
});