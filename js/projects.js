function filterCards(category, btn) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    const match = category === 'all' || card.dataset.category === category;
    card.style.display = match ? 'flex' : 'none';
  });
}

// Read hash on page load and apply filter
function applyHashFilter() {
  const hash = window.location.hash.replace('#', '');
  if (hash && hash !== 'all') {
    const matchingTab = [...document.querySelectorAll('.filter-tab')]
      .find(t => t.getAttribute('onclick').includes(`'${hash}'`));
    if (matchingTab) filterCards(hash, matchingTab);
  }
}

window.addEventListener('load', applyHashFilter);

// Orb follow
const orb1 = document.querySelector('.orb1');
document.addEventListener('mousemove', e => {
  orb1.style.transition = 'right 1s ease, top 1s ease';
  orb1.style.right = (window.innerWidth - e.clientX - 250) + 'px';
  orb1.style.top = (e.clientY - 250) + 'px';
});