const colck = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  colck.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
