const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum = 0; 
let operator = "";
let secondNum = 0;

const operate = (first, operator, second) => {
    if (operator === "+") {
        return add(first, second);
    } else if (operator === "-") {
        return subtract(first, second);
    } else if (operator === "*") {
        return multiply(first, second);
    } else {
        if (second === 0) {
            return "Error (Div by 0)";
        }
        return divide(first, second);
    }
}

let displayValue = 0;
let reset = false;
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
    firstNum = 0;
    secondNum = 0;
    operator = "";
    reset = false;
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

const addNumber = (number) => {
    if (number === "." && displayValue.toString().includes(".")) {
        number = "";
    }

    if (displayValue == 0 || reset) {
        displayValue = number;
    } else {
        displayValue = displayValue.toString() + number.toString();
    }
    display.textContent = displayValue
};

const updateDisplay = () => {
    zero.addEventListener("click", () => addNumber(0));
    one.addEventListener("click", () => addNumber(1));
    two.addEventListener("click", () => addNumber(2));
    three.addEventListener("click", () => addNumber(3));
    four.addEventListener("click", () => addNumber(4));
    five.addEventListener("click", () => addNumber(5));
    six.addEventListener("click", () => addNumber(6));
    seven.addEventListener("click", () => addNumber(7));
    eight.addEventListener("click", () => addNumber(8));
    nine.addEventListener("click", () => addNumber(9));
    decimal.addEventListener("click", () => addNumber("."));
};

const handleOperator = (op) => {
    if (operator === "") {
        firstNum = parseFloat(displayValue);
        operator = op;
        displayValue = 0;
    } else {
        secondNum = parseFloat(displayValue);
        displayValue = operate(firstNum, operator, secondNum);
        display.textContent = displayValue;
        firstNum = parseFloat(displayValue);
    }
    operator = op;
    reset = true;
};

addition.addEventListener("click", () => handleOperator("+"));
subtraction.addEventListener("click", () => handleOperator("-"));
multiplication.addEventListener("click", () => handleOperator("*"));
divison.addEventListener("click", () => handleOperator("/"));


equals.addEventListener("click", () => {
    if(operator !== "") {
        secondNum = parseFloat(displayValue, 10);
        displayValue = operate(firstNum, operator, secondNum);
        firstNum = 0;
        secondNum = 0;
        operator = "";
        display.textContent = displayValue;
        reset = true;
    }
});

updateDisplay();