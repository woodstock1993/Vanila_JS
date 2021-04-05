const body = document.querySelector("body");
const colors = ["#f39c12", "#8e44ad", "#3498db"];

function bodyPaint() {
	const width = window.innerWidth;
	if (width > 1400) {
		body.style.backgroundColor = colors[0];
		console.log(width);
	} else if (width > 1000) {
	  body.style.backgroundColor = colors[1];
	} else if (width > 700) {
	body.style.backgroundColor = colors[2];
	}
}

function init() {
	  body.style.backgroundColor = colors[0];
	  window.addEventListener("resize", bodyPaint);
}

init();
