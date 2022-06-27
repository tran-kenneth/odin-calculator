let display = 0;
let operand1 = 0;
let operator = "";
let operand2 = undefined;

function clearCalculator() {
  display = 0;
  operand1 = 0;
  operator = "";
  operand2 = undefined;
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.getElementsByClassName("calc-display")[0];
  displayElement.textContent = display;
}

function handleOperand(e) {
  if (operator == "") {
    if (operand1 == 0) operand1 = "";
    operand1 += e.srcElement.value;
    display = operand1;
    updateDisplay();
  }
}

function addEventListenersToButtons() {
  const buttons = document.querySelectorAll("button");
  console.log(buttons);
  console.log(buttons[0].classList.contains("operand"));

  buttons.forEach((button) => {
    if (button.classList.contains("operand")) {
      button.addEventListener("click", handleOperand);
    } else if (button.classList.contains("operator")) {
      button.addEventListener("click", logEventValue);
    } else if (button.classList.contains("sign")) {
      button.addEventListener("click", logEventValue);
    } else if (button.classList.contains("decimal")) {
      button.addEventListener("click", logEventValue);
    } else if (button.classList.contains("equals")) {
      button.addEventListener("click", logEventValue);
    } else if (button.classList.contains("clear")) {
      button.addEventListener("click", clearCalculator);
    }
  });
}

function logEventValue(e) {
  const value = e.srcElement.value;
  console.log(value);
  display += value;
  updateDisplay();
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiple(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

updateDisplay();
addEventListenersToButtons();
