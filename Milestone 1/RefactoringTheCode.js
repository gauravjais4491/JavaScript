// const prompt = require('promp-sync')();
import prompt from "prompt-sync"
let continueCalculating=true;
do {
    function getOperation() {
        console.log("\n Which operation you want to perform: ")
        console.log("+ for Addition")
        console.log("- for Subtraction")
        console.log("* for Multiplication")
        console.log("/ for Division")
        let userInput = prompt("")
    
        let validOperations = ["+", "-", "*", "/"]
        if (validOperations.includes(userInput)) {
            return userInput;
        }
        else {
            console.log("Invalid Input")
        }
    }
    function getNumbers() {
        console.log("Enter two number seperated by commas: ");
        let input = prompt()
        let arrayOfTwoNumber = input.split(",");
        return arrayOfTwoNumber;
    }
    
    function calculate() {
        const operator = getOperation();
        let array=getNumbers();
        switch (operator) {
            case "+":
                add(array)
                break;
            case "-":
                subtract(array);
                break;
            case "*":
                multiply(array);
                break;
            case "/":
                divide(array);
                break;
        }
    }
    function add(array){
        console.log(`The Addition of ${array[0]} and  ${array[1]} is: ${(parseInt(array[0]) + parseInt(array[1]))}`);
        tryAgain();
    }
    function subtract(array){
        console.log(`The Subtraction of ${array[0]} and  ${array[1]} is: ${(parseInt(array[0]) - parseInt(array[1]))}`);
        tryAgain();
    }
    function multiply(array){
        console.log(`The Multiplication   of ${array[0]} and  ${array[1]} is: ${(parseInt(array[0]) *  parseInt(array[1]))}`);
        tryAgain();
    }
    function divide(array){
        console.log(`The Division of ${array[0]} and  ${array[1]} is: ${(parseInt(array[0]) / parseInt(array[1]))}`);
        tryAgain();
    }
    
    function tryAgain() {
        console.log("You want to try again")
        let userInput = prompt()
        if (userInput == "yes") {
            calculate();
        }
        else {
            continueCalculating = false;
            console.log("Thank You! ")
        }
    }
    calculate();
} while (continueCalculating);
