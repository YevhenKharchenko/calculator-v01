const form = document.querySelector('.form');
const output = document.querySelector('.output');
const resultOutput = document.querySelector('.text-output');

let num1 = 0;
let num2 = 0;
let operator = '';
let result = 0;

form.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.classList.contains('number')) {
    if (isNaN(output.value) || num1 === 0) {
      output.value = '';
    }

    output.value += event.target.textContent;

    if (operator === '') {
      num1 = parseInt(output.value);
    } else {
      num2 = parseInt(output.value);
    }
  }

  if (event.target.getAttribute('type') === 'reset') {
    output.value = '';
    num1 = 0;
    num2 = 0;
    result = 0;
    operator = '';
  }

  if (event.target.classList.contains('operator')) {
    if (result !== 0) {
      num1 = result;
      output.value = event.target.textContent;
      operator = event.target.textContent;
    } else if (num2 === 0) {
      output.value = event.target.textContent;
      operator = event.target.textContent;
    } else {
      num1 = calcValue(num1, num2, operator);
      output.value = event.target.textContent;
      operator = event.target.textContent;
    }
  }

  function calcValue(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
    }
  }

  if (event.target.classList.contains('equal')) {
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }

    output.value = result;

    num1 = 0;
    num2 = 0;
    operator = '';
  }
});
