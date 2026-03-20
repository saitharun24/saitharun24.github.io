/* NAV SCROLL */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* MOBILE MENU */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* REVEAL ON SCROLL */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));

// /* CONTACT FORM (mailto fallback) */
// function sendEmail() {
//   const name = document.getElementById('fname').value.trim();
//   const email = document.getElementById('femail').value.trim();
//   const message = document.getElementById('fmessage').value.trim();
//   const status = document.getElementById('form-status');
//   if (!name || !email || !message) {
//     status.style.color = '#ff6b6b';
//     status.textContent = 'Please fill in all fields.';
//     return;
//   }
//   const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
//   const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
//   window.open(`mailto:saitharun24@gmail.com?subject=${subject}&body=${body}`);
//   status.style.color = '#00e5ff';
//   status.textContent = '✓ Opening your mail client...';
// }

/* SUBTLE CURSOR GLOW */
const orb1 = document.querySelector('.orb1');
document.addEventListener('mousemove', e => {
  orb1.style.transition = 'left 0.8s ease, top 0.8s ease';
  orb1.style.left = (e.clientX - 250) + 'px';
  orb1.style.top = (e.clientY - 250) + 'px';
});