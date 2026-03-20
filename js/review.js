let selectedRating = 0;

function setRating(val) {
  selectedRating = val;
  document.querySelectorAll('.rating-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i < val);
  });
}

function submitForm() {
  const name     = document.getElementById('fname').value.trim();
  const email    = document.getElementById('femail').value.trim();
  const category = document.getElementById('fcategory').value;
  const message  = document.getElementById('fmessage').value.trim();
  const status   = document.getElementById('form-status');
  const url = "https://api.telegram.org/bot2059098496:AAGA_IgWnv672jYKidbzunPDorU1w0qMg1I/sendMessage?chat_id=785778962&text=";

  if (!name || !category || !message) {
    status.style.color = '#ff6b6b';
    status.textContent = '⚠ Please fill in name, category and suggestion.';
    return;
  }

  const rating = selectedRating ? `Rating: ${selectedRating}/5` : 'No rating given';
  const subject = encodeURIComponent(`Portfolio Suggestion [${category}] from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email || 'Not provided'}\nCategory: ${category}\n${rating}\n\nSuggestion:\n${message}`
  );
	const URL = url + body + "&parse_mode=html";
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", URL, true);
	xhttp.send();

  // Show success state
  setTimeout(() => {
    document.getElementById('form-view').style.display = 'none';
    const sv = document.getElementById('success-view');
    sv.style.display = 'flex';
  }, 400);
}

// Subtle orb follow
const orb1 = document.querySelector('.orb1');
document.addEventListener('mousemove', e => {
  orb1.style.transition = 'left 1s ease, top 1s ease';
  orb1.style.left = (e.clientX - 250) + 'px';
  orb1.style.top  = (e.clientY - 250) + 'px';
});
