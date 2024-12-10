// Hamburger Menu Toggle
const menuIcon = document.querySelector('.bx-menu');
const navMenu = document.querySelector('.navmenu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scroll for Anchor Links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for header height
            behavior: 'smooth'
        });
    });
});

// Scroll Down Arrow Animation
const downArrow = document.querySelector('.down-arrow');

downArrow.addEventListener('click', () => {
    const nextSection = document.querySelector('.activities-section');
    window.scrollTo({
        top: nextSection.offsetTop - 70, // Adjust for header height
        behavior: 'smooth'
    });
});

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show or Hide Back to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});
