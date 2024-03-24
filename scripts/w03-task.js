/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

document.querySelector("#addNumbers").addEventListener("click", function() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
});

/* Function Expression - Subtract Numbers */
function sub(number1, number2) {
    return number1 - number2;
}

document.querySelector("#subtractNumbers").addEventListener("click", function() {
    let subNumber1 = Number(document.querySelector("#subtract1").value);
    let subNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = sub(subNumber1, subNumber2);
});

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

document.querySelector("#multiplyNumbers").addEventListener("click", function() {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
});

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

document.querySelector("#divideNumbers").addEventListener("click", function() {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
});

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", function() {
    let subtotal = Number(document.querySelector("#subtotal").value);
    let isMember = document.querySelector("#member").checked;

    if (isMember) {
        subtotal *= 0.8; // Apply 20% discount
    }

    document.querySelector("#total").textContent = `$ ${subtotal.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
const numbersArray = Array.from({ length: 13 }, (_, i) => i + 1);
document.getElementById("array").textContent = numbersArray.join(", ");

const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById("odds").textContent = oddNumbers.join(", ");

const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById("evens").textContent = evenNumbers.join(", ");

const sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedArray.join(", ");

const sumOfMultiplied = multipliedArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
