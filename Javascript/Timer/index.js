const minuteOne = document.querySelector(".hour-one");
const minuteTen = document.querySelector(".hour-ten");
const secondOne = document.querySelector(".second-one");
const secondTen = document.querySelector(".second-ten");

//Buttons
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let minutes = 2;
let seconds = 5;
let interval;

const updateMinutes = () => {
    minutes = minutes - 1
    const minutesStr = minutes.toString();

    if(minutes.toString().length === 1){
        minuteOne.textContent = "0";
        minuteTen.textContent = minutes;
    }
    else if(minutes.toString().length > 1){
        minuteOne.textContent = minutesStr[0];
        minuteTen.textContent = minutesStr[1];
    }
}

start.addEventListener('click', () => {
    if(interval) clearInterval(interval);

    interval = setInterval(() => {
        seconds = seconds - 1;
        if(seconds < 0 && minutes > 0){
            seconds = 59;
            updateMinutes()
        }
        if(seconds < 0 && minutes <= 0){
            clearInterval(interval);
            return;
        }
        const secondsStr = seconds.toString();

        if(seconds.toString().length === 1){
            secondOne.textContent = "0";
            secondTen.textContent = seconds;
        }
        else if(seconds.toString().length > 1){
            secondOne.textContent = secondsStr[0];
            secondTen.textContent = secondsStr[1];
        }
    }, 1000)
})

stop.addEventListener('click', () => {
    clearInterval(interval);
})

reset.addEventListener('click', () => {
    clearInterval(interval);
    secondOne.textContent = "0";
    secondTen.textContent = "5";
    minuteOne.textContent = "0";
    minuteTen.textContent = "1";
})