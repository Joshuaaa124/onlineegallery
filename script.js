// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Gallery Filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Function to filter gallery items
    function filterGallery(category) {
        galleryItems.forEach(item => {
            if (category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // Add event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter gallery based on category
            const category = this.getAttribute('data-category');
            filterGallery(category);
        });
    });
    
    // Love Notes Modal
    const noteCards = document.querySelectorAll('.note-card');
    const modal = document.getElementById('noteModal');
    const closeModal = document.querySelector('.close');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    
    // Sample love notes content
    const loveNotes = {
        1: {
            title: 'To My Angela',
            content: 'From our first online conversation to our first hug, every moment with you has been special. I still remember how nervous I was on our first date, but you made me feel so comfortable. When you let me say "I love you" for the first time, it felt like my heart would burst with happiness. And our first hug - I\'ll cherish that moment forever. You are my sunshine, my comfort, and my greatest adventure. I can\'t wait to spend the rest of my life making you as happy as you make me. Love always, Joshua.'
        },
        2: {
            title: 'My Beautiful Angela',
            content: 'Angela, you are the most gorgeous girl I\'ve ever known, with a smile that lights up my world and eyes that I could get lost in forever. Your laughter is my favorite sound - you have this amazing ability to make me laugh even on my toughest days. I love how your face lights up when we get cookies and cream ice cream, and I\'m constantly in awe of how brilliant you are. Seeing how good you are with kids tells me what an incredible mother you\'ll be someday. Our coffee dates are some of my favorite moments because I get to just sit and admire how beautiful you are, inside and out. I\'m the luckiest guy in the world to have you. Love, Joshua.'
        },
        3: {
            title: 'Our Strength',
            content: 'We\'ve faced challenges, but we always find our way back to each other. That\'s our superpower. Every disagreement, every difficult moment has only made our bond stronger. We learn from each other, we grow together, and we never give up on what we have. This journey we\'re on with all its ups and downs is our story. And I wouldn\'t want to write it with anyone else. Here\'s to many more chapters in our little world. Forever yours, Joshua & Angela.'
        }
    };
    
    // Open modal when a note card is clicked
    noteCards.forEach(card => {
        card.addEventListener('click', function() {
            const noteId = this.getAttribute('data-note');
            const note = loveNotes[noteId];
            
            if (note && modal && modalTitle && modalText) {
                modalTitle.textContent = note.title;
                modalText.textContent = note.content;
                modal.style.display = 'block';
            }
        });
    });
    
    // Close modal when X is clicked
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            if (modal) modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside the content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hero button scroll to about section
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Add some interactivity to the bucket list items
    const bucketListItems = document.querySelectorAll('.bucketlist-items input[type="checkbox"]');
    bucketListItems.forEach(item => {
        item.addEventListener('change', function() {
            if (this.checked) {
                // Add a simple celebration effect for checked items
                this.parentElement.style.backgroundColor = 'var(--light-pink)';
                setTimeout(() => {
                    this.parentElement.style.backgroundColor = 'transparent';
                }, 500);
            }
        });
    });

    // Spotify play button functionality - UPDATED WITH REDIRECT
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            // REPLACE THIS URL WITH YOUR ACTUAL SPOTIFY PLAYLIST LINK
            window.open('https://open.spotify.com/playlist/3rAGGCJFLn00cYMvfPlmKV?si=c5Ubz2wNTWiUQVwIiOvzWA&pi=NhkTFWtVR1uBT', '_blank');
        });
    }
});