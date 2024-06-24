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

let displayValue = 0;
const display = document.querySelector(".numbers")

const ac = document.querySelector(".ac");
const plusminus = document.querySelector(".plusminus");
const percent = document.querySelector(".percent");
const divison = document.querySelector(".divison");

const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const multiplication = document.querySelector(".multiplication");

const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const subtraction = document.querySelector(".subtraction");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const addition = document.querySelector(".addition");

const zero = document.querySelector(".zero");
const decimal = document.querySelector(".decimal");
const equals = document.querySelector(".equals");

ac.addEventListener("click", () => {
    displayValue = 0;
    display.textContent = displayValue;
});

plusminus.addEventListener("click", () => {
    displayValue *= -1;
    display.textContent = displayValue;
});

percent.addEventListener("click", () => {
    if (displayValue !== 0) {
        displayValue /= 100;
    }
    display.textContent = displayValue.toString();
});