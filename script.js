// Simple fade-in effect for sections
const sections = document.querySelectorAll('.section');
const options = { threshold: 0.2 };
const observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('fade-in');
    }
  });
}, options);

sections.forEach(sec => observer.observe(sec));
