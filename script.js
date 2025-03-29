// Get references to the display input and buttons from the HTML document.
const display = document.getElementById("display");
const equalBtn = document.getElementById("equalBtn");
const clearBtn = document.getElementById("clearBtn");
const operatorButtons = document.getElementsByClassName("operatorBtn");
const digitButtons = document.getElementsByClassName("digitBtn");

/**
 * Appends a digit to the display input.
 * @param {string} digit - The digit to append.
 */
function appendDigitToDisplay(digit) {
    display.value += digit;
}

/**
 * Appends an operator to the display input.
 * @param {string} operator - The operator to append.
 */
function appendOperatorToDisplay(operator) {
    display.value += operator;
}

/**
 * Clears the display input.
 */
function clearDisplay() {
    display.value = "";
}

/**
 * Computes the result of the expression in the display input using eval().
 * Handles potential errors during evaluation and displays "Error" if an error occurs.
 */
function computeResult() {
    try {
        // Evaluate the expression in the display input.
        display.value = eval(display.value);
    } catch (error) {
        // Display "Error" if an error occurs during evaluation.
        display.value = "Error";
    }
}

// Initialize an empty string to store the current expression.
let string = "";

// Convert the HTMLCollection of digit buttons to an array.
const digitsArray = Array.from(digitButtons);

// Add click event listeners to each digit button.
digitsArray.forEach(digit => {
    digit.addEventListener("click", (e) => {
        // Get the text content of the clicked digit button.
        string = e.target.textContent;
        // Append the digit to the display input.
        appendDigitToDisplay(string);
    });
});

// Convert the HTMLCollection of operator buttons to an array.
const operatorsArray = Array.from(operatorButtons);

// Add click event listeners to each operator button.
operatorsArray.forEach(operator => {
    operator.addEventListener("click", (e) => {
        // Handle multiplication and division differently because their value attributes are used.
        if (e.target.value === "/" || e.target.value === "*") {
            // Get the value attribute of the operator button.
            string = e.target.value;
        } else {
            // Get the text content of the operator button.
            string = e.target.textContent;
        }
        // Append the operator to the display input.
        appendOperatorToDisplay(string);
    });
});

// Add click event listener to the clear button.
clearBtn.addEventListener("click", () => clearDisplay());

// Add click event listener to the equal button.
equalBtn.addEventListener("click", () => computeResult());