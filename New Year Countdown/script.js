const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearDate = new Date("January 1, 2024 00:00:00").getTime();

function countdown() {
  const currentDate = new Date().getTime();
  const difference = newYearDate - currentDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  dayEl.innerHTML = days;
  hourEl.innerHTML = hours;
  minuteEl.innerHTML = minutes;
  secondEl.innerHTML = seconds;
}

setInterval(countdown, 1000);

countdown();
