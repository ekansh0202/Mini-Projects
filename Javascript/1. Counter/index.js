const number = document.querySelector('.number');
const inputValue = document.querySelector('.input-value');
const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const reset = document.querySelector('.reset');
let value = 0;

add.addEventListener('click', () => {
    //Converting value of the input field to number
    value+=Number(inputValue.value);
    number.textContent = value;
});

minus.addEventListener('click', () => {
    //Converting value of the input field to number
    value-=Number(inputValue.value);
    number.textContent = value;
});

reset.addEventListener('click', () => {
    value=0;
    inputValue.value = 0;
    number.textContent = value;
});