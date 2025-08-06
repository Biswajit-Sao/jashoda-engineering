// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');

mobileMenuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
  mobileMenuBtn.innerHTML = navList.classList.contains('active') ? 
    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-item a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Header Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Testimonial Slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.prev-testimonial');
const nextBtn = document.querySelector('.next-testimonial');
let currentSlide = 0;

function showSlide(index) {
  testimonialSlides.forEach(slide => slide.classList.remove('active'));
  testimonialSlides[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % testimonialSlides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-rotate testimonials
let testimonialInterval = setInterval(nextSlide, 5000);

// Pause auto-rotation when hovering over testimonials
const testimonialSlider = document.querySelector('.testimonial-slider');
testimonialSlider.addEventListener('mouseenter', () => {
  clearInterval(testimonialInterval);
});

testimonialSlider.addEventListener('mouseleave', () => {
  testimonialInterval = setInterval(nextSlide, 5000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Animation on scroll
function animateOnScroll() {
  const animateElements = document.querySelectorAll('.animate-card');
  
  animateElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
  // Trigger initial animations
  setTimeout(() => {
    document.querySelector('.animate-fade-in').style.opacity = '1';
  }, 100);
  
  setTimeout(() => {
    document.querySelector('.animate-fade-in-delay').style.opacity = '1';
  }, 500);
  
  setTimeout(() => {
    document.querySelector('.animate-slide-up').style.opacity = '1';
    document.querySelector('.animate-slide-up').style.transform = 'translateY(0)';
  }, 800);
  
  // Show first testimonial
  showSlide(0);
});