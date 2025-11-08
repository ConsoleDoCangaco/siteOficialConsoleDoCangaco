// Mobile Navbar
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => { navLinks.classList.remove('open'); });
});

// Scroll-in Animations
window.addEventListener('scroll', function() {
  document.querySelectorAll('.anim-fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.animationPlayState = 'running';
      el.style.opacity = 1;
    }
  });
}, { passive: true });
// Initial trigger delayed to allow animation on load
setTimeout(()=>window.dispatchEvent(new Event('scroll')), 300);

// FAQ Expand/Collapse
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = btn.closest('.faq-item');
    item.classList.toggle('open');
    btn.setAttribute('aria-expanded', item.classList.contains('open'));
  });
});

// Fake contato form submission
document.querySelector('.contato-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Mensagem enviada! Obrigado por entrar em contato.");
  this.reset();
});