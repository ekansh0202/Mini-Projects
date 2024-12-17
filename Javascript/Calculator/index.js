const buttons = document.querySelectorAll(".button");
const result = document.querySelector(".result");

// let result = 0;
let operatorClicked;
let previousOperator;
let stack = [];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.textContent;
    if (!isNaN(item) && Number(item).toString() === item) {
      //Button clicked is a number
      if (result.textContent.toString() === "0") {
        result.textContent = item;
      } else if (operatorClicked) {
        result.textContent = "";
        result.textContent += item;
        operatorClicked = false;
      } else {
        result.textContent += item;
      }
    } else {
      //Button clicked is an operator or clear
      operatorClicked = item;
      stack.push(result.textContent);
      if(item !== "C"){
        if (item !== "=") {
            //Store the operator before =
            previousOperator = item;
          }
          else if (item === "=") {
            //Operator is '='. Display result
            if (previousOperator === "+") {
              result.textContent = Number(stack[0]) + Number(stack[1]);
            } else if (previousOperator === "-") {
              result.textContent = Number(stack[0]) - Number(stack[1]);
            } else if (previousOperator === "*") {
              result.textContent = Number(stack[0]) * Number(stack[1]);
            } else if (previousOperator === "/") {
              result.textContent = Math.round(Number(stack[0]) / Number(stack[1]), 2);
            }
            stack.splice(0, stack.length);
          }
      }
      else{
        result.textContent = '0';
        operatorClicked = false;
        previousOperator = '';
      }
    }
  });
});
