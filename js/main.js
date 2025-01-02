document.addEventListener('DOMContentLoaded', function() {
    const testimonialsCarousel = new TestimonialsCarousel('#testimonials .testimonials-carousel');

     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = Array.from(navLinks).map(link => {
        const targetId = link.getAttribute('href');
        return document.querySelector(targetId);
    });

    // Function to handle click event and add active class
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default anchor behavior
            e.preventDefault();
            // Close the navbar using Bootstrap's collapse method
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                } else {
                    new bootstrap.Collapse(navbarCollapse, { toggle: false }).hide();
                }
            }

            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll to the section smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }

            // Update the active class
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Intersection Observer to detect the visible section and update active link
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find the corresponding nav link for the visible section
                const sectionId = `#${entry.target.id}`;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === sectionId);
                });
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        if (section) observer.observe(section);
    });

$('.hero-title').addClass('animate__animated animate__fadeInDown');
$('.hero-subtitle').addClass('animate__animated animate__fadeInUp');
$('.hero-cta-group a').addClass('animate__animated animate__zoomIn');


});




// Smooth Scrolling
$('.scroll-link').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});




// Advanced 3D Testimonials Carousel
class TestimonialsCarousel {
    constructor(carouselSelector) {
        this.carousel = document.querySelector(carouselSelector);
        if (!this.carousel) return;

        this.track = this.carousel.querySelector('.testimonials-track');
        this.slides = Array.from(this.carousel.querySelectorAll('.testimonial-slide'));
        this.prevBtn = this.carousel.querySelector('.carousel-prev');
        this.nextBtn = this.carousel.querySelector('.carousel-next');
        this.indicators = this.carousel.querySelectorAll('.carousel-indicator');
        
        this.currentIndex = 0;
        this.slideCount = this.slides.length;
        this.autoSlideInterval = null;

        this.init();
    }

    init() {
        // Ensure at least 3 slides for proper carousel effect
        if (this.slideCount < 3) {
            console.warn('Not enough slides for carousel effect');
            return;
        }

        this.updateSlides();
        this.addEventListeners();
        this.startAutoSlide();
    }

    updateSlides() {
        // Reset all slides
        this.slides.forEach(slide => {
            slide.classList.remove('active', 'prev', 'next');
        });

        // Update indicators
        this.indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });

        // Calculate indices with wrapping
        const prevIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
        const nextIndex = (this.currentIndex + 1) % this.slideCount;

        // Add classes to slides for 3D effect
        this.slides[prevIndex].classList.add('prev');
        this.slides[this.currentIndex].classList.add('active');
        this.slides[nextIndex].classList.add('next');

        // Update active indicator
        if (this.indicators[this.currentIndex]) {
            this.indicators[this.currentIndex].classList.add('active');
        }
    }

    addEventListeners() {
        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Touch and swipe support for mobile
        this.addTouchSupport();

        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.carousel.addEventListener('mouseleave', () => this.startAutoSlide());
    }

    addTouchSupport() {
        let startX = 0;
        let endX = 0;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.track.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        });

        this.track.addEventListener('touchend', () => {
            const diffX = startX - endX;
            if (Math.abs(diffX) > 50) {
                // Swipe left
                if (diffX > 0) {
                    this.nextSlide();
                } 
                // Swipe right
                else {
                    this.prevSlide();
                }
            }
        });
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
        this.updateSlides();
        this.resetAutoSlide();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slideCount;
        this.updateSlides();
        this.resetAutoSlide();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlides();
        this.resetAutoSlide();
    }

    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
    }

    resetAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
}



// Scroll Reveal Animations
function checkReveal() {
    $('.reveal').each(function() {
        const windowHeight = $(window).height();
        const elementTop = $(this).offset().top;
        const scrollPosition = $(window).scrollTop();

        if (scrollPosition > elementTop - windowHeight + 100) {
            $(this).addClass('active');
        }
    });
}

$(window).scroll(checkReveal);
checkReveal(); // Initial check

// Hero Title Animation
$('.animated-title').addClass('active');


// Service Card Hover Effects
$('.service-card').hover(
    function() {
        $(this).addClass('shadow-lg');
    },
    function() {
        $(this).removeClass('shadow-lg');
    }
);

// Contact Method Interactions
$('.contact-method').on('click', function() {
    const link = $(this).find('.contact-link');
    if (link.length) {
        const href = link.attr('href');
        if (href.startsWith('tel:') || href.startsWith('mailto:')) {
            window.location.href = href;
        } else {
            window.open(href, '_blank');
        }
    }
});

