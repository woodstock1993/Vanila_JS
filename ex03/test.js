const select = document.querySelector("select");
const COUNTRY_NAME = "Country";
function saveCounrty() {
	const changeValue = select.value;
	localStorage.setItem(COUNTRY_NAME, changeValue);
}

function loadCountries(){
	const selected = localStorage.getItem("COUNTRY_NAME");
	if (selected) {
		const option = document.querySelector(`option[value="${selected}]")`);
		option.selected = true; 	
	}
}

function init() {
	select.addEventListener("change", saveCounrty);
}
init();
