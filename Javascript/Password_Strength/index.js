const password = document.querySelector(".input");
const lowercase = document.querySelector(".lowercase");
const uppercase = document.querySelector(".uppercase");
const number = document.querySelector(".number");
const symbol = document.querySelector(".symbol");
const passwordLength = document.querySelector(".length");
const strength = document.querySelector(".strength");
const progressBar = document.querySelector(".progress");
let value = "";
let width = "";

password.addEventListener("input", (event) => {

  //Check for lowercase
  if (password.value.match(/[a-z]/) !== null) {
    lowercase.style.color = "green";
  } else if (password.value.match(/[a-z]/) === null) {
    lowercase.style.color = "rgb(187, 182, 182)";
  }

  //Check for uppercase
  if (password.value.match(/[A-Z]/) !== null) {
    uppercase.style.color = "green";
  } else if (password.value.match(/[A-Z]/) === null) {
    uppercase.style.color = "rgb(187, 182, 182)";
  }

  //Check for number
  if (password.value.match(/[0-9]/) !== null) {
    number.style.color = "green";
  } else if (password.value.match(/[a-z]/) === null) {
    number.style.color = "rgb(187, 182, 182)";
  }

  //Check for symbol
  if (password.value.match(/[^a-zA-Z0-9]/) !== null) {
    symbol.style.color = "green";
  } else if (password.value.match(/[^a-zA-Z0-9]/) === null) {
    symbol.style.color = "rgb(187, 182, 182)";
  }

  //Progress bar & strength
  passwordLength.textContent = password.value.length;
  if(password.value.length * 10 <= 100){
    if(password.value.length <= 4){
        progressBar.style.backgroundColor = 'red';
        strength.textContent = 'Weak';
    }
    else if(password.value.length > 4 && password.value.length < 8){
        progressBar.style.backgroundColor = 'orange';
        strength.textContent = 'Medium';
    }
    else if(password.value.length > 8){
        progressBar.style.backgroundColor = 'green';
        strength.textContent = 'Strong';
    }
    progressBar.style.width = `${password.value.length * 10}%`;
  }
});
