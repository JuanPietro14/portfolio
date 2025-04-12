//scroll suave
const lenis = new Lenis({
  lerp: 0.1,
  smoothWheel: true,
  syncTouch: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      lenis.scrollTo(targetElement, {
        offset: -20,
        duration: 1.4
      });
    }
  });
});



//digitando
const initTypingEffect = () => {
  const textElement = document.getElementById("typing");
  if (!textElement) return;

  const text = "Juan Pietro";
  let index = 0;
  let isDeleting = false;
  let typingSpeed = 200; 

  const typeEffect = () => {
    const currentText = text.slice(0, index);
    textElement.innerHTML = currentText; 
    
    if (!isDeleting && index <= text.length) {
      index++;
      typingSpeed = 130; 
    } else if (isDeleting && index >= 0) {
      index--;
      typingSpeed = 100; 
    }

    if (index > text.length) {
      isDeleting = true;
      typingSpeed = 1500; 
    } else if (index === 0) {
      isDeleting = false;
      typingSpeed = 800; 
    }

    setTimeout(typeEffect, typingSpeed);
  };

  typeEffect();
};

document.addEventListener('DOMContentLoaded', initTypingEffect);


document.getElementById('current-year').textContent = new Date().getFullYear();
