// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// <!--AOS Animate on Scroll-- >
AOS.init({
    duration: 1000,
    once: true
});


document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');

        const expanded = question.getAttribute('aria-expanded') === 'true';
        question.setAttribute('aria-expanded', !expanded);
    });
});

