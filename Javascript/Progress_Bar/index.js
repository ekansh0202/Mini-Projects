const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const progressBar = document.querySelector(".progress-bar");
const percent = document.querySelector(".percent");

let width = 0;
let interval;

start.addEventListener("click", () => {
  stop.disabled = false;
  start.disabled = true;
  interval = setInterval(() => {
    if (width === 100) {
      clearInterval(interval);
      return;
    }
    width += 10;
    percent.textContent = `${width}%`;
    progressBar.style.width = `${width}%`;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  stop.disabled = true;
  start.disabled = false;
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  width = 0;
  progressBar.style.width = `${width}%`;
  percent.textContent = `${width}%`;
  stop.disabled = true;
  start.disabled = false;
});
