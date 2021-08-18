const displayPreviousValue = document.getElementById('previous-value');
const displayCurrentValue = document.getElementById('current-value');
const NumberButtons = document.querySelectorAll('.number');
const OperatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue, displayCurrentValue);

NumberButtons.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

OperatorButtons.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});