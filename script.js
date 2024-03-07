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
    

});