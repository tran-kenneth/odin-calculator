let display = 0;
let operand1 = 0;
let operator = "";
let operand2 = undefined;
let completedOperation = false;

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
    if (operand1 == 0 || completedOperation == true) operand1 = "";
    completedOperation = false;
    operand1 += e.srcElement.value;
    display = operand1;
    updateDisplay();
  } else {
    if (operand2 == undefined) operand2 = "";
    operand2 += e.srcElement.value;
    display = operand2;
    updateDisplay();
  }
}

function handleOperator(e) {
  completedOperation = false;
  operator = e.srcElement.value;
}

function handleSign(e) {
  if (operator == "") {
    operand1 = Number(operand1) * -1;
    display = operand1;
    completedOperation = false;
  } else {
    operand2 = Number(operand2) * -1;
    display = operand2;
  }
  updateDisplay();
  console.log(e);
}

function handleDecimal(e) {
  if (String(display).indexOf(".") == -1) {
    if (operator == "") {
      operand1 += ".";
      display = operand1;
      completedOperation = false;
    } else {
      operand2 += ".";
      display = operand2;
    }
  }

  updateDisplay();
  console.log(e);
}

function handleEqual() {
  if (operator) {
    const result = operate(operator, Number(operand1), Number(operand2));
    console.log(result);
    operand1 = result;
    display = result;
    operand2 = undefined;
    completedOperation = true;
  }
  operator = "";
  updateDisplay();
}

function addEventListenersToButtons() {
  const buttons = document.querySelectorAll("button");
  console.log(buttons);
  console.log(buttons[0].classList.contains("operand"));

  buttons.forEach((button) => {
    if (button.classList.contains("operand")) {
      button.addEventListener("click", handleOperand);
    } else if (button.classList.contains("operator")) {
      button.addEventListener("click", handleOperator);
    } else if (button.classList.contains("sign")) {
      button.addEventListener("click", handleSign);
    } else if (button.classList.contains("decimal")) {
      button.addEventListener("click", handleDecimal);
    } else if (button.classList.contains("equals")) {
      button.addEventListener("click", handleEqual);
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

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  console.log(num1, num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

updateDisplay();
addEventListenersToButtons();
