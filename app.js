// Banking Dashboard JavaScript
// This file handles basic UI interactions for the responsive design

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    let sidebarOpen = false;

    // Create mobile overlay
    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-overlay';
    mobileOverlay.id = 'mobileOverlay';
    body.appendChild(mobileOverlay);

    // Toggle mobile sidebar
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            sidebarOpen = !sidebarOpen;
            
            if (sidebarOpen) {
                sidebar.classList.add('active');
                menuToggle.classList.add('active');
                mobileOverlay.classList.add('active');
                body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
                mobileOverlay.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }

    // Close sidebar when clicking overlay
    mobileOverlay.addEventListener('click', function() {
        if (sidebarOpen) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
            mobileOverlay.classList.remove('active');
            body.style.overflow = '';
            sidebarOpen = false;
        }
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && sidebarOpen) {
            if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
                mobileOverlay.classList.remove('active');
                body.style.overflow = '';
                sidebarOpen = false;
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
            mobileOverlay.classList.remove('active');
            body.style.overflow = '';
            sidebarOpen = false;
        }
    });

    // Add hover effects for interactive elements
    const accountCards = document.querySelectorAll('.account-card');
    const transactionItems = document.querySelectorAll('.transaction-item');
    const contactItems = document.querySelectorAll('.contact-item');

    // Account card interactions
    accountCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add visual feedback for card click
            this.style.transform = 'translateY(-4px) scale(0.98)';
            
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
        });
    });

    // Transaction item click simulation
    transactionItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add visual feedback for click
            const originalBg = this.style.backgroundColor;
            this.style.backgroundColor = 'rgba(33, 128, 141, 0.1)';
            
            setTimeout(() => {
                this.style.backgroundColor = originalBg;
            }, 200);
        });
    });

    // Contact item interactions
    contactItems.forEach(contact => {
        contact.addEventListener('click', function() {
            // Add visual feedback for contact selection
            const originalBg = this.style.backgroundColor;
            this.style.backgroundColor = 'rgba(33, 128, 141, 0.1)';
            
            setTimeout(() => {
                this.style.backgroundColor = originalBg;
            }, 300);
        });
    });

    // Sidebar navigation active state handling
    const sidebarLinks = document.querySelectorAll('.sidebar__link');
    const navLinks = document.querySelectorAll('.nav-link');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all sidebar links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile sidebar after selection
            if (window.innerWidth <= 768 && sidebarOpen) {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
                mobileOverlay.classList.remove('active');
                body.style.overflow = '';
                sidebarOpen = false;
            }
            
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Header navigation active state handling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Action button interactions
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add button press effect
            this.style.transform = 'translateY(-1px) scale(0.98)';
            
            // Add a subtle loading state simulation
            const originalContent = this.innerHTML;
            const icon = this.querySelector('.action-btn__icon');
            const text = this.querySelector('span');
            
            if (icon && text) {
                icon.style.opacity = '0.6';
                text.style.opacity = '0.6';
            }
            
            setTimeout(() => {
                this.style.transform = 'translateY(0) scale(1)';
                if (icon && text) {
                    icon.style.opacity = '1';
                    text.style.opacity = '1';
                }
            }, 200);
        });
    });

    // Profile dropdown simulation
    const profile = document.querySelector('.profile');
    if (profile) {
        profile.addEventListener('click', function() {
            // Add visual feedback for profile click
            this.style.transform = 'scale(0.98)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    }

    // Add smooth scrolling for better UX
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

    // View All link interaction
    const viewAllLink = document.querySelector('.view-all');
    if (viewAllLink) {
        viewAllLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    }

    // Add focus management for accessibility
    function manageFocus() {
        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--color-primary)';
                this.style.outlineOffset = '2px';
            });

            element.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });
    }

    manageFocus();

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && sidebarOpen) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
            mobileOverlay.classList.remove('active');
            body.style.overflow = '';
            sidebarOpen = false;
        }
    });

    // Notification interactions
    const notificationItems = document.querySelectorAll('.notification-item');
    notificationItems.forEach(notification => {
        notification.addEventListener('click', function() {
            // Add click feedback
            this.style.transform = 'scale(0.98)';
            this.style.opacity = '0.8';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.opacity = '1';
            }, 150);
        });
    });

    // Add loading states for better UX feedback
    function addLoadingState(element, duration = 1000) {
        element.style.opacity = '0.6';
        element.style.cursor = 'not-allowed';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.cursor = 'pointer';
        }, duration);
    }

    // Initialize responsive behavior
    function handleResponsiveChanges() {
        const isDesktop = window.innerWidth > 1024;
        const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
        const isMobile = window.innerWidth <= 768;

        // Update layout classes based on screen size
        if (isDesktop) {
            document.body.classList.remove('tablet-layout', 'mobile-layout');
            document.body.classList.add('desktop-layout');
        } else if (isTablet) {
            document.body.classList.remove('desktop-layout', 'mobile-layout');
            document.body.classList.add('tablet-layout');
        } else if (isMobile) {
            document.body.classList.remove('desktop-layout', 'tablet-layout');
            document.body.classList.add('mobile-layout');
        }
    }

    // Initialize on load
    handleResponsiveChanges();
    
    // Update on resize
    window.addEventListener('resize', handleResponsiveChanges);

    // Console log for demonstration purposes
    console.log('SecureBank Dashboard loaded successfully!');
    console.log('Features:');
    console.log('- ✅ Responsive layout with CSS Grid and Flexbox');
    console.log('- ✅ Mobile-first design with functional hamburger menu');
    console.log('- ✅ Interactive hover and click effects');
    console.log('- ✅ Professional banking color scheme');
    console.log('- ✅ Accessible focus management');
    console.log('- ✅ Keyboard navigation support');
    console.log('- ✅ Three-column layout (sidebar + main + right sidebar)');
});