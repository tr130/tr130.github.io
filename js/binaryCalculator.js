const calculator = document.getElementById('btns');
const display = document.getElementById('res');
let displayDigits = "";

calculator.addEventListener('click', function(e) {
    let btn = e.target.textContent;
    if (btn === 'C') {
        displayDigits = ""
    } else if (btn === '=') {
        let digits = displayDigits.match(/\d+/g)
        let operator = displayDigits.match(/[+\-*\/]/)[0]
        let operand1 = parseInt(digits[0], 2)
        let operand2 = parseInt(digits[1], 2)
        let answer;
        if (operator === '+') {
            answer = operand1 + operand2;
        } else if (operator === '-') {
            answer = operand1 - operand2;
        } else if (operator === '*') {
            answer = operand1 * operand2;
        } else if (operator === '/') {
            answer = Math.floor(operand1 / operand2);
        }
        displayDigits = answer.toString(2);
    }
    else {
        displayDigits += btn;
    }
    display.textContent = displayDigits;
})