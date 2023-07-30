const prompt = require("prompt-sync")()
let continueCalculating = true;
function checkAgain() {

    while (continueCalculating) {
        function getOperation() {
            console.log("\n Which operation you want to perform: ")
            console.log("+ for Addition")
            console.log("- for Substraction")
            console.log("* for Multiplication")
            console.log("/ for Division")
            let userInput = prompt("")

            let validOperations = ["+", "-", "*", "/"]
            if (validOperations.includes(userInput)) {
                return userInput;
            }
            else {
                console.log("Invalid Input")
                tryAgain();
            }
        }
        function getNumbers() {
            let input = prompt("Enter two number seperated by commas: ")
            let arrayOfTwoNumber = input.split(",");
            return errorHandingForInput(arrayOfTwoNumber);
        }
        function errorHandingForInput(arrayOfTwoNumber) {
            if ((!isNaN(arrayOfTwoNumber[0]) == true) && (!isNaN(arrayOfTwoNumber[1]) == true)) {
                return arrayOfTwoNumber;
            }
            else {
                console.log("Invalid Input!")
                tryAgain();
            }
        }

        function calculate() {
            const operator = getOperation();
            let array = getNumbers();
            switch (operator) {
                case "+":
                    add(array)
                    break;
                case "-":
                    substract(array);
                    break;
                case "*":
                    multiply(array);
                    break;
                case "/":
                    divide(array);
                    break;
            }
        }
        function add(array) {
            console.log(`The Addition of ${array[0]} and  ${array[1]} is: ${(parseInt(array[0]) + parseInt(array[1]))}`);
            tryAgain();
        }
        function substract(array) {
            console.log(`The Substraction of ${array[0]} and  ${array[1]} is: ${(parseInt(array[0]) - parseInt(array[1]))}`);
            tryAgain();
        }
        function multiply(array) {
            console.log(`The Multiplication of ${array[0]} and  ${array[1]} is: ${(parseInt(array[0]) * parseInt(array[1]))}`);
            tryAgain();
        }
        function divide(array) {
            errorHanding(array);
        }
        function errorHanding(array) {
            if (array[1] == '0') {
                console.log("Invalid Input!")

            }
            else {
                console.log(`The Division of ${array[0]} and  ${array[1]} is: ${(parseInt(array[0]) / parseInt(array[1]))}`);

            }
            tryAgain();
        }
        calculate();
        function tryAgain() {
            console.log("You want to try again")
            let tryAgain = prompt()
            if (tryAgain == "yes") {
                calculate();
            }
            else {
                continueCalculating = false;
                console.log("Thank You! ")
                checkAgain();
            }
        }
    }

}
checkAgain();