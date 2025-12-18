// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px 50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes and observe elements
document.addEventListener('DOMContentLoaded', () => {
    // Handle anchor links from other pages
    if (window.location.hash) {
        setTimeout(() => {
            const targetSection = document.querySelector(window.location.hash);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }

    // Animate sections with fade-in
    document.querySelectorAll('section').forEach((section, index) => {
        section.classList.add('fade-in');
        scrollObserver.observe(section);
    });

    // Animate project cards with staggered effect
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.classList.add('scale-in');
        card.style.transitionDelay = `${index * 0.05}s`;
        scrollObserver.observe(card);
    });

    // Animate skill categories
    document.querySelectorAll('.skill-category').forEach((skill, index) => {
        if (index % 2 === 0) {
            skill.classList.add('slide-in-left');
        } else {
            skill.classList.add('slide-in-right');
        }
        skill.style.transitionDelay = `${index * 0.08}s`;
        scrollObserver.observe(skill);
    });

    // Animate testimonial cards
    document.querySelectorAll('.testimonial-card').forEach((card, index) => {
        card.classList.add('scale-in');
        card.style.transitionDelay = `${index * 0.05}s`;
        scrollObserver.observe(card);
    });

    // Animate experience items
    document.querySelectorAll('.timeline-item, .experience-item').forEach((item, index) => {
        item.classList.add('slide-in-left');
        item.style.transitionDelay = `${index * 0.05}s`;
        scrollObserver.observe(item);
    });
});

// Project filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    const categories = card.getAttribute('data-category');
                    if (categories && categories.includes(filter)) {
                        card.style.display = 'block';
                        setTimeout(() => card.style.opacity = '1', 10);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                }
            });
        });
    });
});

// Smooth scroll for navigation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only handle anchor links on the same page
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            // Let other links (like index.html, certifications.html) work normally
        });
    });
});

// Add scroll effect to navigation
document.addEventListener('DOMContentLoaded', () => {
    let lastScroll = 0;
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
});

// Scroll-based spark animation
document.addEventListener('DOMContentLoaded', () => {
    let ticking = false;
    const sparks = document.querySelectorAll('.spark');

    function updateSparkPositions() {
        const scrollY = window.scrollY || window.pageYOffset;

        sparks.forEach((spark, index) => {
            const speed = parseFloat(spark.getAttribute('data-speed')) || 0.5;
            const direction = index % 2 === 0 ? 1 : -1;

            // Calculate movement based on scroll
            const translateX = scrollY * speed * direction * 0.1;
            const translateY = scrollY * speed * 0.15;
            const rotate = scrollY * speed * 0.05 * direction;
            const scale = 1 + (Math.sin(scrollY * 0.01 + index) * 0.3);

            // Apply transform
            spark.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`;

            // Vary opacity based on scroll position
            const opacity = 0.7 + (Math.sin(scrollY * 0.008 + index * 0.5) * 0.3);
            spark.style.opacity = opacity;
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateSparkPositions);
            ticking = true;
        }
    }

    // Listen to scroll events
    window.addEventListener('scroll', requestTick, { passive: true });

    // Initial position
    updateSparkPositions();
});
