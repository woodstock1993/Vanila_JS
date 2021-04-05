const rangeText = document.querySelector("#range"),
	  barRange = document.querySelector("#js-range"),
	  typeGuess = document.querySelector("#js-guess"),
	  displayResult = document.querySelector("#js-result");

function handleRange() {
	  const rangeNumber = rangeText.querySelector("span");
	  rangeNumber.innerHTML = barRange.value;
}

function handleGuess(event) {
	  event.preventDefault();
	  const typeNumber = typeGuess.querySelector("input");
	  if (typeNumber.value === "") {
		      return;
		    }
	  const max = barRange.value;
	  const a = Math.ceil(Math.random() * max); //0~max 사이의 랜덤 값을 생성 max는 불포함
	  const b = parseInt(typeNumber.value, 10);
	  const resultSpan = displayResult.querySelector("span");
	  resultSpan.innerHTML = `You chose: ${b}, the machine chose: ${a}.<br/>
		    ${b === a ? "You won!" : "You lost"}`;
}

barRange.addEventListener("change", handleRange);
typeGuess.addEventListener("submit", handleGuess);
