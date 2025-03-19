document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

// Loading Animation
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-container');
  const techTexts = document.querySelectorAll('.tech-text');
  
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
      // Start tech text animations after loader is hidden
      techTexts.forEach((text, index) => {
        setTimeout(() => {
          text.classList.add('animate');
        }, index * 500);
      });
    }, 500);
  }, 2000);
});

// Scroll-based animations
let animationStarted = false;
let projectsRevealed = false;

function handleScrollAnimations() {
  // About section animation
  if (!animationStarted) {
    const aboutSection = document.querySelector('.main-about');
    const aboutTexts = document.querySelectorAll('.about-wrapper .typing-text');
    
    if (aboutSection) {
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        animationStarted = true;
        
        aboutTexts.forEach((text, index) => {
          setTimeout(() => {
            text.classList.add('visible');
            setTimeout(() => {
              text.classList.add('completed');
            }, 1000);
          }, index * 1000);
        });
      }
    }
  }

  // Project cards reveal animation
  if (!projectsRevealed) {
    const projectSection = document.querySelector('.projects');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectSection) {
      const sectionTop = projectSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        projectsRevealed = true;
        
        projectCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('reveal');
          }, index * 200); // Stagger the reveal of each card
        });
      }
    }
  }
}

// Listen for scroll events
window.addEventListener('scroll', handleScrollAnimations);

// Initial check
handleScrollAnimations();