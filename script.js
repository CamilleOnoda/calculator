document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('#buttons input[type="button"]');
    const clearButton = document.querySelector('#clear');
    const equalButton = document.querySelector('#equal');
  
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
          addToDisplay(button.value);
        });
      });

    clearButton.addEventListener('click', clearDisplay);
    equalButton.addEventListener('click', calculate);

    function addToDisplay(value) {
        display.value += value;
      }
    
    function clearDisplay() {
        display.value = '';
      }

    function calculate() {
        let expression = display.value;
        let regex = /(\d+)([\+\-\*\/])(\d+)/;
        let match = expression.match(regex);
        if (match) {
          let num1 = parseFloat(match[1]);
          let operator = match[2];
          let num2 = parseFloat(match[3]);
          let result;
          switch (operator) {
            case '+':
              result = add(num1, num2);
              break;
            case '-':
              result = subtract(num1, num2);
              break;
            case '*':
              result = multiply(num1, num2);
              break;
            case '/':
              result = divide(num1, num2);
              break;
          }
          display.value = result;
        }
      }
    
    function add(a, b) {
        return a + b;
      }
    
    function subtract(a, b) {
        return a - b;
      }
    
    function multiply(a, b) {
        return a * b;
      }
    
    function divide(a, b) {
        if (b === 0) {
          return "You can't divide by zero";
        } else {
          return a / b;
        }
      }

});