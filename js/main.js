// Hero Section Animation
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


const appointmentForm = document.getElementById('appointmentForm');
const appointmentConfirmation = document.getElementById('appointmentConfirmation');
const confirmationDetails = document.getElementById('confirmationDetails');

// Validate form on submit
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (appointmentForm.checkValidity()) {
            // Collect form data
            const formData = {
                name: document.getElementById('clientName').value,
                email: document.getElementById('clientEmail').value,
                date: document.getElementById('appointmentDate').value,
                time: document.getElementById('appointmentTime').value,
                service: document.getElementById('serviceType').value,
                message: document.getElementById('clientMessage').value,
                id: Date.now() // Unique identifier
            };

            // Save appointment to local storage
            saveAppointment(formData);

            // Show confirmation
            showConfirmation(formData);

            // Reset form
            appointmentForm.reset();
            appointmentForm.classList.remove('was-validated');
        } else {
            appointmentForm.classList.add('was-validated');
        }
    });
}

// Function to save appointment to local storage
function saveAppointment(appointment) {
    let appointments = JSON.parse(localStorage.getItem('uriShamaiAppointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('uriShamaiAppointments', JSON.stringify(appointments));
}

// Function to show confirmation
function showConfirmation(appointment) {
    if (confirmationDetails) {
        confirmationDetails.innerHTML = `
            <strong>Name:</strong> ${appointment.name}<br>
            <strong>Date:</strong> ${appointment.date}<br>
            <strong>Time:</strong> ${appointment.time}<br>
            <strong>Service:</strong> ${appointment.service}
        `;
        if (appointmentConfirmation) {
            appointmentConfirmation.style.display = 'block';
        }

        // Hide confirmation after 5 seconds
        setTimeout(() => {
            if (appointmentConfirmation) {
                appointmentConfirmation.style.display = 'none';
            }
        }, 5000);
    }
}

// Optional: Add method to view and manage appointments
window.viewAppointments = function() {
    const appointments = JSON.parse(localStorage.getItem('uriShamaiAppointments')) || [];
    console.table(appointments);
    return appointments;
};

// Optional: Add method to clear all appointments
window.clearAppointments = function() {
    localStorage.removeItem('uriShamaiAppointments');
    console.log('All appointments cleared');
};


// Firebase and Scheduling System
    // Firebase Configuration (Replace with your actual Firebase config)
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "your-project.firebaseapp.com",
        databaseURL: "https://your-project-default-rtdb.firebaseio.com",
        projectId: "your-project",
        storageBucket: "your-project.appspot.com",
        messagingSenderId: "YOUR_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const database = firebase.database();

    // DOM Elements
    const loginForm = document.getElementById('loginFormElement');
    const registerForm = document.getElementById('registerFormElement');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    const authSection = document.getElementById('authSection');
    const schedulingSection = document.getElementById('schedulingSection');
    const providerDashboard = document.getElementById('providerDashboard');
    const bookingRequestsBody = document.getElementById('bookingRequestsBody');
    const bookAppointmentForm = document.getElementById('bookAppointmentForm');

    // Switch between login and register forms
    if (switchToRegister) {
        switchToRegister.addEventListener('click', () => {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('registerForm').style.display = 'block';
        });
    }

    if (switchToLogin) {
        switchToLogin.addEventListener('click', () => {
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('registerForm').style.display = 'none';
        });
    }

    // Registration
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;

            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    return database.ref('users/' + user.uid).set({
                        name: name,
                        email: email,
                        role: 'client'
                    });
                })
                .then(() => {
                    alert('Registration successful');
                    initializeScheduling();
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    // Login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            auth.signInWithEmailAndPassword(email, password)
                .then(() => {
                    initializeScheduling();
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    // Initialize Scheduling System
    function initializeScheduling() {
        authSection.style.display = 'none';
        schedulingSection.style.display = 'block';

        const user = auth.currentUser;
        database.ref('users/' + user.uid).once('value')
            .then((snapshot) => {
                const userData = snapshot.val();
                if (userData.role === 'admin') {
                    providerDashboard.style.display = 'block';
                    initializeProviderDashboard();
                } else {
                    initializeClientCalendar();
                }
            });
    }

    // Client Calendar Initialization
    function initializeClientCalendar() {
        const calendarEl = document.getElementById('providerCalendar');
        if (calendarEl) {
            const calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'timeGridWeek',
                selectable: true,
                select: function(info) {
                    document.getElementById('selectedDateTime').value = info.startStr;
                    $('#bookingPanel').show();
                }
            });
            calendar.render();

            if (bookAppointmentForm) {
                bookAppointmentForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const selectedDateTime = document.getElementById('selectedDateTime').value;
                    const serviceType = document.getElementById('serviceType').value;

                    database.ref('bookingRequests').push({
                        userId: auth.currentUser.uid,
                        dateTime: selectedDateTime,
                        service: serviceType,
                        status: 'pending'
                    }).then(() => {
                        alert('Booking request sent!');
                    });
                });
            }
        }
    }

    // Provider Dashboard
    function initializeProviderDashboard() {
        if (bookingRequestsBody) {
            database.ref('bookingRequests').on('value', (snapshot) => {
                const requests = snapshot.val();
                bookingRequestsBody.innerHTML = '';

                Object.keys(requests || {}).forEach(key => {
                    const request = requests[key];
                    const row = `
                        <tr>
                            <td>${request.dateTime}</td>
                            <td>${request.userId}</td>
                            <td>${request.service}</td>
                            <td>
                                <button onclick="approveBooking('${key}')">Approve</button>
                                <button onclick="rejectBooking('${key}')">Reject</button>
                            </td>
                        </tr>
                    `;
                    bookingRequestsBody.innerHTML += row;
                });
            });
        }
    }

    // Global functions for booking approval/rejection
    window.approveBooking = function(requestId) {
        database.ref('bookingRequests/' + requestId).update({
            status: 'approved'
        });
    };

    window.rejectBooking = function(requestId) {
        database.ref('bookingRequests/' + requestId).update({
            status: 'rejected'
        });
    };

    // Authentication State Observer
    auth.onAuthStateChanged((user) => {
        if (user) {
            initializeScheduling();
        } else {
            if(authSection){
            authSection.style.display = 'block';
            }
            if(authSection){
                console.log('User is signed out');

            schedulingSection.style.display = 'none';
            }
        }
    });
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




// Scheduling System
const SchedulingSystem = {
    // שעות עבודה
    workingHours: [
        '09:00', '10:00', '11:00', '12:00', 
        '13:00', '14:00', '15:00', '16:00', 
        '17:00', '18:00'
    ],

    // ימי השבוע
    days: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי'],

    // אתחול מערכת התורים
    initializeSchedule: function() {
        try {
            if (!localStorage.getItem('uriShamaiSchedule')) {
                const initialSchedule = {};
                this.days.forEach(day => {
                    initialSchedule[day] = {};
                    this.workingHours.forEach(hour => {
                        initialSchedule[day][hour] = null;
                    });
                });
                localStorage.setItem('uriShamaiSchedule', JSON.stringify(initialSchedule));
            }

            if (!localStorage.getItem('uriShamaiPendingBookings')) {
                localStorage.setItem('uriShamaiPendingBookings', JSON.stringify([]));
            }
        } catch (error) {
            console.error('Error initializing schedule:', error);
        }
    },

    // יצירת טבלת התורים
    generateScheduleTable: function() {
        const scheduleTableBody = document.getElementById('scheduleTableBody');
        if (!scheduleTableBody) {
            console.error('Schedule table body not found');
            return;
        }

        try {
            scheduleTableBody.innerHTML = '';
            const schedule = JSON.parse(localStorage.getItem('uriShamaiSchedule')) || {};
            const pendingBookings = JSON.parse(localStorage.getItem('uriShamaiPendingBookings')) || [];

            this.workingHours.forEach(hour => {
                const row = document.createElement('tr');
                
                // תא שעה
                const hourCell = document.createElement('td');
                hourCell.textContent = hour;
                hourCell.className = 'hour-cell';
                row.appendChild(hourCell);

                // תאי ימים
                this.days.forEach(day => {
                    const cell = document.createElement('td');
                    const status = schedule[day] ? schedule[day][hour] : null;
                    const isPendingBooking = pendingBookings.some(booking => 
                        booking.day === day && booking.hour === hour);

                    // Determine cell status and class
                    if (status) {
                        cell.className = 'booked-slot';
                        cell.textContent = 'תפוס';
                    } else if (isPendingBooking) {
                        cell.className = 'hen-scheduled-slot';
                        cell.textContent = 'ממתין';
                    } else {
                        cell.className = 'available-slot';
                        cell.textContent = 'פנוי';
                        cell.style.cursor = 'pointer';
                        cell.addEventListener('click', () => this.openBookingModal(day, hour));
                    }

                    row.appendChild(cell);
                });

                scheduleTableBody.appendChild(row);
            });

            // Ensure the table has the schedule-table class
            const scheduleTable = document.getElementById('scheduleTable');
            if (scheduleTable) {
                scheduleTable.classList.add('schedule-table');
            }
        } catch (error) {
            console.error('Error generating schedule table:', error);
        }
    },

    // פתיחת חלון הזמנת תור
    openBookingModal: function(day, hour) {
        const modal = document.getElementById('bookingModal');
        if (!modal) {
            console.error('Booking modal not found');
            return;
        }

        const timeDisplay = modal.querySelector('.selected-time-display');
        if (timeDisplay) {
            timeDisplay.textContent = `יום ${day} בשעה ${hour}`;
        }

        const timeSlotInput = document.getElementById('selectedTimeSlot');
        if (timeSlotInput) {
            timeSlotInput.value = `${day} ${hour}`;
        }

        const bookingModal = new bootstrap.Modal(modal);
        bookingModal.show();
    },

    // הצגת תורים ממתינים
    displayPendingBookings: function() {
        const pendingBookingsBody = document.getElementById('pendingBookingsBody');
        if (!pendingBookingsBody) {
            console.error('Pending bookings body not found');
            return;
        }

        try {
            const pendingBookings = JSON.parse(localStorage.getItem('uriShamaiPendingBookings')) || [];
            pendingBookingsBody.innerHTML = '';

            if (pendingBookings.length === 0) {
                const emptyRow = document.createElement('tr');
                emptyRow.innerHTML = '<td colspan="5" class="text-center">אין תורים ממתינים</td>';
                pendingBookingsBody.appendChild(emptyRow);
                return;
            }

            pendingBookings.forEach((booking, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${booking.day}</td>
                    <td>${booking.hour}</td>
                    <td>${booking.name}</td>
                    <td>${booking.phone}</td>
                    <td class="accept-reject-buttons">
                        <button class="btn btn-sm btn-success ms-1" onclick="SchedulingSystem.approveBooking(${index})">
                            <i class="fas fa-check"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="SchedulingSystem.rejectBooking(${index})">
                            <i class="fas fa-times"></i>
                        </button>
                    </td>
                `;
                pendingBookingsBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error displaying pending bookings:', error);
        }
    },

    // אישור תור
    approveBooking: function(index) {
        try {
            const pendingBookings = JSON.parse(localStorage.getItem('uriShamaiPendingBookings')) || [];
            const booking = pendingBookings[index];

            if (!booking) {
                console.error('Booking not found');
                return;
            }

            const schedule = JSON.parse(localStorage.getItem('uriShamaiSchedule')) || {};
            if (!schedule[booking.day]) {
                schedule[booking.day] = {};
            }
            schedule[booking.day][booking.hour] = booking.name;
            localStorage.setItem('uriShamaiSchedule', JSON.stringify(schedule));

            pendingBookings.splice(index, 1);
            localStorage.setItem('uriShamaiPendingBookings', JSON.stringify(pendingBookings));

            this.generateScheduleTable();
            this.displayPendingBookings();
            alert(`התור אושר בהצלחה ל${booking.name}`);
        } catch (error) {
            console.error('Error approving booking:', error);
        }
    },

    // דחיית תור
    rejectBooking: function(index) {
        try {
            const pendingBookings = JSON.parse(localStorage.getItem('uriShamaiPendingBookings')) || [];
            const booking = pendingBookings[index];
            
            if (!booking) {
                console.error('Booking not found');
                return;
            }

            pendingBookings.splice(index, 1);
            localStorage.setItem('uriShamaiPendingBookings', JSON.stringify(pendingBookings));
            
            this.displayPendingBookings();
            alert(`התור ל${booking.name} נדחה`);
        } catch (error) {
            console.error('Error rejecting booking:', error);
        }
    },

    // אתחול והגדרת מאזינים
    setupEventListeners: function() {
        // הגדרת מאזין לטופס ההזמנה
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            bookingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const timeSlot = document.getElementById('selectedTimeSlot')?.value;
                const name = document.getElementById('clientName')?.value;
                const phone = document.getElementById('clientPhone')?.value;

                if (!timeSlot || !name || !phone) {
                    alert('נא למלא את כל השדות');
                    return;
                }

                const [day, hour] = timeSlot.split(' ');

                try {
                    const pendingBookings = JSON.parse(localStorage.getItem('uriShamaiPendingBookings')) || [];
                    pendingBookings.push({ 
                        day, 
                        hour, 
                        name, 
                        phone, 
                        date: new Date().toISOString() 
                    });
                    localStorage.setItem('uriShamaiPendingBookings', JSON.stringify(pendingBookings));

                    const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
                    if (modal) {
                        modal.hide();
                    }
                    bookingForm.reset();

                    this.displayPendingBookings();
                    alert('בקשת התור נשלחה בהצלחה! נעדכן אותך בהקדם.');
                } catch (error) {
                    console.error('Error submitting booking:', error);
                    alert('אירעה שגיאה בשליחת הטופס. נסה שנית.');
                }
            });
        } else {
            console.warn('Booking form not found');
        }

        // הגדרת מאזין לכפתור מנהל
        const adminButton = document.getElementById('adminButton');
        if (adminButton) {
            adminButton.addEventListener('click', () => {
                const adminModal = document.getElementById('adminModal');
                if (adminModal) {
                    this.displayPendingBookings();
                    const modal = new bootstrap.Modal(adminModal);
                    modal.show();
                }
            });
        } else {
            console.warn('Admin button not found');
        }
    },

    // אתחול המערכת
    initialize: function() {
        document.addEventListener('DOMContentLoaded', () => this.init());
    },

    init: function() {
        this.initializeSchedule();
        this.generateScheduleTable();
        this.displayPendingBookings();
        this.setupEventListeners();
    }
};

// Make SchedulingSystem globally accessible
window.SchedulingSystem = SchedulingSystem;

// Initialize when the page loads
SchedulingSystem.initialize();

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



// Form Submission (Note: Replace with actual form handling)
$('#contactForm').on('submit', function(e) {
    e.preventDefault();
    alert('תודה על פנייתך! נחזור אליך בהקדם.');
});

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

// Tooltip for contact methods
$('.contact-method').each(function() {
    const type = $(this).data('type');
    let tooltipText = '';
    switch(type) {
        case 'phone':
            tooltipText = 'לחץ להתקשר';
            break;
        case 'email':
            tooltipText = 'לחץ לשלוח אימייל';
            break;
        case 'facebook':
            tooltipText = 'לחץ לעבור לפייסבוק';
            break;
    }
    $(this).attr('title', tooltipText);
});

