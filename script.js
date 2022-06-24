let display = 0;

function updateDisplay() {
  const displayElement = document.getElementsByClassName("calc-display")[0];
  displayElement.textContent = display;
}

function addEventListenersToButtons() {
  const buttons = document.querySelectorAll("button");
  console.log(buttons);
  console.log(buttons[0].classList.contains("operand"));

  buttons.forEach((button) => {
    if (button.classList.contains("operand")) {
      button.addEventListener("click", logEventValue);
    } else if (button.classList.contains("operator")) {
      button.addEventListener("click", logEventValue);
    } else if (button.classList.contains("sign")) {
      button.addEventListener("click", logEventValue);
    } else if (button.classList.contains("decimal")) {
      button.addEventListener("click", logEventValue);
    } else if (button.classList.contains("equals")) {
      button.addEventListener("click", logEventValue);
    } else if (button.classList.contains("clear")) {
      button.addEventListener("click", logEventValue);
    }
  });
}

function logEventValue(e) {
  console.log(e.srcElement.value);
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
