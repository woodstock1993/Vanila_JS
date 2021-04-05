const clockContainer = document.querySelector(".js-clock"),
	clockTitle = clockContainer.querySelector("h1");

const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;

function countDown() {
	  const xmasDay = new Date("2020-12-24:00:00:00+0900").getTime();
	  const currentDay = new Date().getTime();
	  const remainDay = xmasDay - currentDay;
	  const days = Math.floor(remainDay / DAYS);
	  const hours = Math.floor((remainDay % DAYS) / HOURS);
	  const minutes = Math.floor((remainDay % HOURS) / MINUTES);
	  const seconds = Math.floor((remainDay % MINUTES) / SECONDS);

  clockTitle.innerText = `${days < 10 ? `0${days}` : days + "d"} ${
	  hours < 10 ? `0${hours}` : hours + "h"
  } ${minutes < 10 ? `0${minutes}` : minutes + "m"} ${
	  seconds < 10 ? `0${seconds}` : seconds + "s"
  }`;
}

setInterval(countDown, 1000);
