import './style.css';

// FAQ accordion (bound to window for inline HTML onclick compatibility)
window.toggleFaq = function(btn) {
  btn.parentElement.classList.toggle('open');
};

// Nav scrolled state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }
}, { passive: true });

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Mês/ano atual — banner da carteira e copyright acompanham o calendário
const agora = new Date();
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const elMes = document.getElementById('carteira-mes');
if (elMes) elMes.textContent = `${meses[agora.getMonth()]} ${agora.getFullYear()}`;
const elAno = document.getElementById('foot-ano');
if (elAno) elAno.textContent = agora.getFullYear();
