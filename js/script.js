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


// COUNTER ANIMATION ON SCROLL
// COUNTER ANIMATION ON SCROLL
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter-number");
    let started = false; // To ensure animation starts only once

    const startCounting = () => {
        counters.forEach(counter => {
            counter.innerText = "0";
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const current = +counter.innerText;
                const increment = target / 150; // Speed factor

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount();
        });
    };

    // Intersection Observer to trigger when in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                startCounting();
                started = true;
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector(".counters-section"));
});


// Animate timeline progress on scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".timeline-item").forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {
            item.classList.add("visible");
        }
    });
});



