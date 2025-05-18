// Nawigacja mobilna
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Karuzela
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function moveSlide(step) {
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    const offset = -slideIndex * 100;
    document.querySelector('.carousel-inner').style.transform = translateX(${offset}%);
}

// Automatyczna karuzela
setInterval(() => moveSlide(1), 5000);

// Modal
function openModal() {
    document.getElementById('info-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('info-modal').style.display = 'none';
}

// Licznik odwiedzin (symulowany)
let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
visitCount += Math.floor(Math.random() * 1000) + 5000; // Symulacja
localStorage.setItem('visitCount', visitCount);
document.getElementById('visit-count').textContent = visitCount.toLocaleString();

// Formularz kontaktowy
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(Dziękujemy, ${name}! Twoja wiadomość została wysłana.);
        document.getElementById('contact-form').reset();
    } else {
        alert('Proszę wypełnić wszystkie pola!');
    }
});

// Lazy loading obrazów
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.src; // Trigger loading
                observer.unobserve(entry.target);
            }
        });
    });
    images.forEach(image => observer.observe(image));
});