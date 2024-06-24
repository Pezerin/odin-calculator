const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum = 0; 
let operator = "";
let secondNum;

const operate = (first, operator, second) => {
    if (operator === "+") {
        return add(first, second);
    } else if (operator === "-") {
        return subtract(first, second);
    } else if (operator === "*") {
        return multiply(first, second);
    } else {
        return divide(first, second);
    }
}