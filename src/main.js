import './style.css'

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });
}

// Simple scroll reveal animation (optional)
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Roadmap step progression animation
const roadmapObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const roadmapContent = entry.target.querySelector('.roadmap-content');
      const progressIndicator = entry.target.querySelector('.progress-indicator');
      if (roadmapContent) {
        roadmapContent.classList.add('animate-steps');
      }
      if (progressIndicator) {
        progressIndicator.classList.add('animate-steps');
      }
    }
  });
}, { threshold: 0.3 });

// Observe roadmap section for step animation
const roadmapSection = document.querySelector('.roadmap');
if (roadmapSection) {
  roadmapObserver.observe(roadmapSection);
}

document.querySelectorAll('.feature-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});
