// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Try Now button - can link to your live app or GitHub
document.getElementById('tryNowBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    // Replace with your live app URL if you have one deployed
    window.open('https://github.com/MNDL-27/todo-application#-quick-start', '_blank');
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Check if screenshot exists, otherwise show placeholder
const screenshot = document.getElementById('screenshot');
if (screenshot) {
    screenshot.onerror = function() {
        this.style.display = 'none';
    };
    
    // Try to load the image
    const img = new Image();
    img.onload = function() {
        screenshot.style.display = 'block';
        document.querySelector('.placeholder-demo').style.display = 'none';
    };
    img.onerror = function() {
        screenshot.style.display = 'none';
        document.querySelector('.placeholder-demo').style.display = 'block';
    };
    img.src = screenshot.src;
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and tech cards
document.querySelectorAll('.feature-card, .tech-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Console message for developers
console.log('%c👋 Hello Developer!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cInterested in the code? Check out the repository:', 'font-size: 14px; color: #64748b;');
console.log('%chttps://github.com/MNDL-27/todo-application', 'font-size: 14px; font-weight: bold; color: #667eea;');
