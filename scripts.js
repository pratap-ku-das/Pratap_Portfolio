/* ============================================
   Portfolio Website JavaScript
   Features: Theme Toggle, Smooth Scroll, Project Filter, Modal, Skill Animations, Typed Effect
   ============================================ */

// ============================================
// DOM Elements
// ============================================
const themeToggle = document.getElementById('themeToggle');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');
const projectsGrid = document.getElementById('projectsGrid');
const projectsFilter = document.getElementById('projectsFilter');
const projectModal = document.getElementById('projectModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const typedText = document.getElementById('typedText');

// ============================================
// Theme Toggle (Light/Dark Mode)
// ============================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('.theme-toggle__icon');
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Initialize theme on load
initTheme();

// ============================================
// Mobile Navigation Toggle
// ============================================
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" or empty
        if (href === '#' || href === '') {
            return;
        }

        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Scroll to Top Button
// ============================================
function handleScrollTop() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

if (scrollTopBtn) {
    window.addEventListener('scroll', handleScrollTop);
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Typed Text Effect in Hero
// ============================================
const typedStrings = ['Java Developer', 'Web Developer', 'Game Developer'];
let typedStringIndex = 0;
let typedCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    if (!typedText) return;

    const currentString = typedStrings[typedStringIndex];
    
    if (isDeleting) {
        typedText.textContent = currentString.substring(0, typedCharIndex - 1);
        typedCharIndex--;
        typingSpeed = 50;
    } else {
        typedText.textContent = currentString.substring(0, typedCharIndex + 1);
        typedCharIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && typedCharIndex === currentString.length) {
        // Pause at end of word
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && typedCharIndex === 0) {
        // Move to next word
        isDeleting = false;
        typedStringIndex = (typedStringIndex + 1) % typedStrings.length;
        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
}

// Start typed effect
if (typedText) {
    typeText();
}

// ============================================
// Projects Data
// ============================================
const projects = [
    {
        id: 1,
        title: 'Calculator',
        date: 'Nov-2025',
        description: 'A modern, stylish digital calculator UI featuring vibrant buttons and a sleek dark theme.',
        image: 'assets/project-calculator.jpg',
        tags: ['javascript', 'html', 'css'],
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        codeUrl: 'https://github.com/pratap-ku-das/CodeAlpha_Calculator',
        liveUrl: 'https://pratap-ku-das.github.io/CodeAlpha_Calculator/'
    },
    {
        id: 2,
        title: 'Image Gallery',
        date: 'Nov 2025',
        description: 'A beautifully designed gallery interface featuring high-quality images and intuitive filter navigation.',
        image: 'assets/project-image-gallery.jpg',
        tags: ['javascript', 'html', 'css'],
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        codeUrl: 'https://github.com/pratap-ku-das/CodeAlpha_image_gallery',
        liveUrl: 'https://pratap-ku-das.github.io/CodeAlpha_image_gallery/'
    },
    {
        id: 3,
        title: 'Age Calculator Web App',
        date: 'Aug 2025',
        description: 'Created an interactive Age Calculator using HTML, CSS, and JavaScript. Computes precise age in years, months, and days with a responsive user interface.',
        image: 'assets/project-agecalculator.jpg',
        tags: ['javascript', 'html', 'css'],
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        codeUrl: 'https://github.com/pratap-ku-das/CodeAlpha_AgeCalculator',
        liveUrl: 'https://pratap-ku-das.github.io/CodeAlpha_AgeCalculator/'
    }
];

// ============================================
// Render Projects
// ============================================
function renderProjects(filter = 'all') {
    if (!projectsGrid) return;

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.tags.includes(filter.toLowerCase()));

    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-project-id="${project.id}">
            <div class="project-card__image">
               <img src="${project.image}" 
                     alt="${project.title} screenshot" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                     style="width: 100%; height: 100%; object-fit: cover;">
                <span style="display: none; align-items: center; justify-content: center; width: 100%; height: 100%; color: var(--text-muted); font-size: 0.875rem;">Project Screenshot Placeholder</span>
            </div>
            <div class="project-card__content">
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__date">${project.date}</p>
                <p class="project-card__description">${project.description}</p>
                <div class="project-card__tags">
                    ${project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
                </div>
                <div class="project-card__actions">
                    <a href="${project.codeUrl}" 
                       class="project-card__btn project-card__btn--code" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       onclick="event.stopPropagation();">
                        View Code
                    </a>
                    <a href="${project.liveUrl}" 
                       class="project-card__btn project-card__btn--live" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       onclick="event.stopPropagation();">
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    // Add click event to project cards
    const projectCards = projectsGrid.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking on buttons
            if (e.target.closest('.project-card__btn')) {
                return;
            }
            const projectId = parseInt(card.dataset.projectId);
            openProjectModal(projectId);
        });
    });
}

// ============================================
// Project Filter
// ============================================
if (projectsFilter) {
    const filterButtons = projectsFilter.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            // Filter projects
            const filter = button.dataset.filter;
            renderProjects(filter);
        });
    });
}

// ============================================
// Project Modal
// ============================================
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project || !modalBody) return;

    modalBody.innerHTML = `
        <div class="project-card__image" style="height: 300px; margin-bottom: 1.5rem;">
            <span>Project Screenshot Placeholder</span>
        </div>
        <h2 class="modal__title">${project.title}</h2>
        <p class="modal__date">${project.date}</p>
        <p class="modal__description">${project.description}</p>
        <div class="modal__tech">
            <h3 class="modal__tech-title">Technologies Used:</h3>
            <div class="modal__tech-list">
                ${project.tech.map(tech => `<span class="modal__tech-item">${tech}</span>`).join('')}
            </div>
        </div>
        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <a href="${project.codeUrl}" 
               class="btn btn--primary" 
               target="_blank" 
               rel="noopener noreferrer">
                View Code
            </a>
            <a href="${project.liveUrl}" 
               class="btn btn--secondary" 
               target="_blank" 
               rel="noopener noreferrer">
                Live Demo
            </a>
        </div>
    `;

    if (projectModal) {
        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    if (projectModal) {
        projectModal.classList.remove('active');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeProjectModal);
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ============================================
// Animated Skill Bars on Scroll
// ============================================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-item__progress');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const percent = progressBar.dataset.percent;
                progressBar.style.width = `${percent}%`;
                observer.unobserve(progressBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize skill bar animations
animateSkillBars();

// ============================================
// Contact Form Handler
// ============================================
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Create mailto link
        const mailtoSubject = encodeURIComponent(subject);
        const mailtoBody = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );
        const mailtoLink = `mailto:pratap.kumar.das@rcm.ac?subject=${mailtoSubject}&body=${mailtoBody}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form
        contactForm.reset();

        // Show success message
        alert('Thank you for your message! Your email client should open shortly.');
    });
}

// ============================================
// Header Scroll Effect
// ============================================
function handleHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    if (window.scrollY > 50) {
        header.style.boxShadow = 'var(--shadow-md)';
    } else {
        header.style.boxShadow = 'var(--shadow-sm)';
    }
}

window.addEventListener('scroll', handleHeaderScroll);

// ============================================
// Initialize Projects on Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
});

// ============================================
// Accessibility: Keyboard Navigation
// ============================================
document.addEventListener('keydown', (e) => {
    // Close modal with Escape
    if (e.key === 'Escape') {
        if (projectModal && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// ============================================
// Performance: Lazy Loading Images (if added later)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Console Message
// ============================================
console.log('%c👋 Hello! Welcome to Pratap Kumar Das\'s Portfolio', 'color: #20c997; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and Vanilla JavaScript', 'color: #6c757d; font-size: 12px;');





