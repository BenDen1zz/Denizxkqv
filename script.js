// Yıl
document.getElementById('year').textContent = new Date().getFullYear();

// Mobil menü
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll Progress Bar
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Mouse Glow
const mouseGlow = document.getElementById('mouseGlow');
if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        mouseGlow.style.opacity = '1';
        mouseGlow.style.left = e.clientX + 'px';
        mouseGlow.style.top = e.clientY + 'px';
    });
    document.addEventListener('mouseleave', () => {
        mouseGlow.style.opacity = '0';
    });
}

// Reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Planet paralaks (scroll ile hafif kayma)
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.planet').forEach((planet, i) => {
        const speed = (i + 1) * 0.05;
        planet.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
