const display = document.getElementById("display");
const equalBtn = document.getElementById("equalBtn");
const clearBtn = document.getElementById("clearBtn")
const operatorButtons = document.getElementsByClassName("operatorBtn");
const digitButtons = document.getElementsByClassName("digitBtn");

function appendDigitToDisplay(digit) {
    display.value += digit;
}

function appendOperatorToDisplay(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = "";
}

function computeResult() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

let string = "";

const digitsArray = Array.from(digitButtons);
digitsArray.forEach(digit => {
    digit.addEventListener("click", (e) => {
        string = e.target.textContent;
        appendDigitToDisplay(string);
    })
})

const operatorsArray = Array.from(operatorButtons);
operatorsArray.forEach(operator => {
    operator.addEventListener("click", (e) => {
        if(e.target.value == "/" || e.target.value == "*") {
            string = e.target.value;
        }
        else {
            string = e.target.textContent;            
        }
        appendOperatorToDisplay(string);
    })
})

clearBtn.addEventListener("click", (e) => clearDisplay());

equalBtn.addEventListener("click", (e) => computeResult());


/* Alternative Approach Below:*/

// const buttons = document.querySelectorAll("button");

// const arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener("click", (e) => {
//         if(e.target.textContent == "=") {
//             string = eval(string);
//             display.value = string;
//         }

//         else if(e.target.textContent == "C") {
//             string = "";
//             display.value = string;
//         }

//         else if(e.target.value == "/") {
//             string += e.target.value;
//             display.value = string;
//         }

//         else if(e.target.value == "*") {
//             string += e.target.value;
//             display.value = string;
//         }

//         else {
//             string += e.target.textContent;
//             display.value = string;
//         }
//     })
// })
