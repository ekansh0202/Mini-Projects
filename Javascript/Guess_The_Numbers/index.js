const inputValue = document.querySelector(".input-value");
const submit = document.querySelector(".submit");
const start = document.querySelector(".start");
const result = document.querySelector(".result");
const answers = document.querySelector(".answers");

let answerValues = answers.textContent;

const randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber)

submit.addEventListener('click', () => {
    if(Number(inputValue.value) > randomNumber){
        result.textContent = 'Too high!';
    }
    else if(Number(inputValue.value) < randomNumber){
        result.textContent = 'Too low!';
    }
    else if(Number(inputValue.value) === randomNumber){
        result.textContent = 'Correct!';
        submit.disabled = true;
        start.disabled = false;
    }

    if(answers.textContent.length === 0){
        answers.textContent = 'Your guesses: ' + inputValue.value;
    }
    else{
        answers.textContent = answers.textContent + ", " + inputValue.value
    }
    answers.style.display = 'flex';
});

start.addEventListener('click', () => {
    inputValue.value = "";
    result.textContent = '';
    answers.textContent = '';
    submit.disabled = false;
    start.disabled = true;
});