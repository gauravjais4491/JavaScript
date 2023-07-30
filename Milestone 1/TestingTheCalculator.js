const prompt = require("prompt-sync")()
let continueCalculating = true;
let error = true;
let error1 = true;

do {
    getOperations();
    function getOperations() {
        let operater = setOperation();
        if (error == true) {
            let arrayOfTwoNumber = setNumbers();
            if (error1 == true) {
                calculate(operater, arrayOfTwoNumber);
            }


        }
    }
    //setters
    function setOperation() {
        console.log("\n Which operation you want to perform: ")
        console.log("+ for Addition")
        console.log("- for Substraction")
        console.log("* for Multiplication")
        console.log("/ for Division")
        let userInput = prompt("")
        return errorHandingForOperation(userInput);
    }
    //setters
    function setNumbers() {
        let input = prompt("Enter two number seperated by commas: ")
        let arrayOfTwoNumber = input.split(",");
        return errorHandingForNumbers(arrayOfTwoNumber);
    }

    function errorHandingForOperation(userInput){

        let validOperations = ["+", "-", "*", "/"]
        if (validOperations.includes(userInput)) {
            return userInput;
        }
        else {
            console.log("Invalid Input")
            error = false;
            tryAgain();
        }
    }

    function errorHandingForNumbers(arrayOfTwoNumber) {
        if ((!isNaN(arrayOfTwoNumber[0]) == true) && (!isNaN(arrayOfTwoNumber[1]) == true)) {
            return arrayOfTwoNumber;
        }
        else {
            console.log("Invalid Input!")
            error1 = false;
            tryAgain();
        }
    }

    function calculate(operater, arrayOfTwoNumber) {
        switch (operater) {
            case "+":
                add(arrayOfTwoNumber)
                break;
            case "-":
                substract(arrayOfTwoNumber);
                break;
            case "*":
                multiply(arrayOfTwoNumber);
                break;
            case "/":
                divide(arrayOfTwoNumber);
                break;
        }
    }

    function add(arrayOfTwoNumber) {
        console.log(`The Addition of ${arrayOfTwoNumber[0]} and  ${arrayOfTwoNumber[1]} is: ${(parseInt(arrayOfTwoNumber[0]) + parseInt(arrayOfTwoNumber[1]))}`);
        tryAgain();
    }
    function substract(arrayOfTwoNumber) {
        console.log(`The Substraction of ${arrayOfTwoNumber[0]} and  ${arrayOfTwoNumber[1]} is: ${(parseInt(arrayOfTwoNumber[0]) - parseInt(arrayOfTwoNumber[1]))}`);
        tryAgain();
    }
    function multiply(arrayOfTwoNumber) {
        console.log(`The Multiplication of ${arrayOfTwoNumber[0]} and  ${arrayOfTwoNumber[1]} is: ${(parseInt(arrayOfTwoNumber[0]) * parseInt(arrayOfTwoNumber[1]))}`);
        tryAgain();
    }
    function divide(arrayOfTwoNumber) {
        errorHandingForDivision(arrayOfTwoNumber);
    }
    function errorHandingForDivision(arrayOfTwoNumber) {
        if (arrayOfTwoNumber[1] == '0') {
            console.log("Invalid Input!")

        }
        else {
            console.log(`The Division of ${arrayOfTwoNumber[0]} and  ${arrayOfTwoNumber[1]} is: ${(parseInt(arrayOfTwoNumber[0]) / parseInt(arrayOfTwoNumber[1]))}`);

        }
        tryAgain();
    }
    function tryAgain() {
        console.log("You want to try again")
        let tryAgain = prompt("")
        if (tryAgain == "yes") {
            getOperation();
        }
        else {
            continueCalculating = false;
            console.log("Thank You! ")
        }
    }
} while (continueCalculating);