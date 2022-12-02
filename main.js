const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const btn = document.querySelector("#btn");
const closeElement = document.querySelector("#close");
const modal = document.querySelector("#modal");

const countDownDate = new Date("May 26, 2023 00:00:00").getTime();

setInterval(() =>{
  const now = new Date;

  const diff = countDownDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor(diff / (1000 * 60));
  const secs = Math.floor(diff / 1000);

  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  daysElement.innerHTML = `${d} :`;
  hoursElement.textContent = h <= 9 ? `0${h} :` : `${h} :`;
  minutesElement.textContent = m <= 9 ? `0${m} :` : `${m} :`;
  secondsElement.textContent = s <= 9 ? `0${s}` : `${s}`;  
}, 1000);

btn.addEventListener("click", () => {
  const modal = document.querySelector("#modal");
  const actualStyle = modal.style.display;

  if (actualStyle === "block") {
    modal.style.display = "none";
  }else
    modal.style.display = "block";
  
})

modal.addEventListener('click', function(e) {
  if (e.target == this){
    modal.style.display = "none";
  }
});