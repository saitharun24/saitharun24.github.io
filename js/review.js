const form = document.getElementById("feedback");
form.addEventListener('submit', async (event) => {
	event.preventDefault();
	const url = "https://api.telegram.org/bot2059098496:AAGA_IgWnv672jYKidbzunPDorU1w0qMg1I/sendMessage?chat_id=785778962&text=";
	const name = form.elements['name'].value;
	const msg = form.elements['text'].value;
	document.getElementById("feedback").reset();
	const message = encodeURIComponent("<b>Portfolio Site</b>" + "\nName : "+ name +"\nMessage : <i>" + msg +"</i>");
	const URL = url + message + "&parse_mode=html";
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", URL, true);
	xhttp.send();
});
