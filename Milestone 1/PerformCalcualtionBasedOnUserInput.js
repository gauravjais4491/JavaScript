const prompt = require("prompt-sync")()


function calculate(userinput, arrayOfTwoNumber) {
    let validOperations = ["+", "-", "*", "/"]
    if (validOperations.includes(userinput)) {
        switch (userinput) {
            case '+':
                console.log(parseInt(arrayOfTwoNumber[0]) + parseInt(arrayOfTwoNumber[1]))
                break;
            case '-':
                console.log(arrayOfTwoNumber[0] - arrayOfTwoNumber[1])
                break;
            case '*':
                console.log(arrayOfTwoNumber[0] * arrayOfTwoNumber[1])
                break;
            case '/':
                console.log(arrayOfTwoNumber[0] / arrayOfTwoNumber[1])
                break;

            default:
                break;
        }
    }
    else {
        console.log("Invalid Input")
    }
}
console.log("Which operation you want to perform: ")
console.log("+ for Addition")
console.log("- for Substraction")
console.log("* for Multiplication")
console.log("/ for Division")
let userinput = prompt("")

let input = prompt("Enter two number seperated by commas: ")
let arrayOfTwoNumber=input.split(",");
calculate(userinput, arrayOfTwoNumber)