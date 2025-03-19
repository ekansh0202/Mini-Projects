const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const container = document.querySelector(".container");

start.addEventListener('click', () => {
    const progressContainer = document.createElement("div");
    progressContainer.classList.add(`progress`);
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    progressContainer.appendChild(progressBar);
    container.appendChild(progressContainer);
    addProgressBar(progressBar);
})

const addProgressBar = (progressBar) => {
    let width = 0;
    const interval = setInterval(() => {
        if(width === 100){
            clearInterval(interval);
            return;
        }
        width += 25;
        progressBar.style.width = `${width}%`;
    }, 1000)
}