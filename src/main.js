document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const menuIcon = btn ? btn.querySelector('i') : null;

    if (btn && menu && menuIcon) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            if (menu.classList.contains('hidden')) {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            } else {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            }
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            });
        });
    }

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((section) => {
        observer.observe(section);
    });

    // Navbar blur effect on scroll
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (nav) {
            if (window.scrollY > 10) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        }
    });

    // Handle scroll to top for logo click
    const logo = document.querySelector('.flex-shrink-0.flex.items-center.cursor-pointer');
    if (logo) {
        logo.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Hero Slideshow Logic
    const slides = document.querySelectorAll('.slideshow-item');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 4000; // 4 seconds

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, slideInterval);
    }

    // Lounge Slideshow Logic
    const loungeSlides = document.querySelectorAll('.lounge-slideshow-item');
    if (loungeSlides.length > 0) {
        let currentLoungeSlide = 0;
        const loungeInterval = 2000; // 2 seconds

        function nextLoungeSlide() {
            loungeSlides[currentLoungeSlide].classList.remove('active');
            currentLoungeSlide = (currentLoungeSlide + 1) % loungeSlides.length;
            loungeSlides[currentLoungeSlide].classList.add('active');
        }

        setInterval(nextLoungeSlide, loungeInterval);
    }
});
