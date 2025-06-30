document.addEventListener('DOMContentLoaded', function() {
  
  const toggleButton = document.getElementById('toggle-blog-button');

  const blogSection = document.getElementById('blog-section');

 
  toggleButton.addEventListener('click', function(event) {
      
      event.preventDefault(); 
      
     
      blogSection.classList.toggle('is-visible');
  });
});
const animateElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

animateElements.forEach(el => observer.observe(el));
