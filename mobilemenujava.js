// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('show');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('#mobile-menu a, #mobile-menu button').forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('show');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target)) { // Fixed: Added parentheses around the condition
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('show');
        }
    });
    
    // Logout buttons
    document.getElementById('logout-btn').addEventListener('click', function() {
        alert('Logout successful');
    });
    
    document.getElementById('mobile-logout-btn').addEventListener('click', function() {
        alert('Logout successful');
    });
    
    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Music Player
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    
    // Set volume to 30%
    bgMusic.volume = 0.3;
    
    // Play music on first user interaction
    function enableAudio() {
        bgMusic.play().then(() => {
            // Audio played successfully
        }).catch(error => {
            console.log("Autoplay prevented:", error);
        });
        document.body.removeEventListener('click', enableAudio);
    }
    
    document.body.addEventListener('click', enableAudio, { once: true });
    
    // Toggle music play/pause
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            bgMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
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
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fact-card, .official-card, .news-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.fact-card, .official-card, .news-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});
