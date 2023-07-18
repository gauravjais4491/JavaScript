const prompt = require("prompt-sync")()

let continueCalculating = 'true';
do {
    
    function basicCalculator() {
        console.log("\n Which operation you want to perform: ")
        console.log("+ for Addition")
        console.log("- for Substraction")
        console.log("* for Multiplication")
        console.log("/ for Division")
        let userinput = prompt("")

        let input = prompt("Enter two number seperated by commas: ")
        let arrayOfTwoNumber = input.split(",");
        calculate(userinput, arrayOfTwoNumber)
    }
        function calculate(userinput, arrayOfTwoNumber) {
            let validOperations = ["+", "-", "*", "/"]
            if (validOperations.includes(userinput)) {
                switch (userinput) {
                    case '+':
                        console.log(`The Addition of ${arrayOfTwoNumber[0]} and  ${arrayOfTwoNumber[1]} is: ${(parseInt(arrayOfTwoNumber[0]) + parseInt(arrayOfTwoNumber[1]))}`)
                        tryAgain();
                        break;
                    case '-':
                        console.log(`The Substraction of ${arrayOfTwoNumber[0]} and  ${arrayOfTwoNumber[1]} is: ${(arrayOfTwoNumber[0] - arrayOfTwoNumber[1])}`)
                        tryAgain();
                        break;
                    case '*':
                        console.log(`The Multiplication of ${arrayOfTwoNumber[0]} and  ${arrayOfTwoNumber[1]} is: ${(arrayOfTwoNumber[0] * arrayOfTwoNumber[1])}`)
                        tryAgain();
                        break;
                    case '/':
                        console.log(`The Division of ${arrayOfTwoNumber[0]} and  ${arrayOfTwoNumber[1]} is: ${(arrayOfTwoNumber[0] / arrayOfTwoNumber[1])}`)
                        tryAgain();
                        break;
                }
            }
            else {
                console.log("Invalid Input")
                tryAgain();
            }
        }
    function tryAgain() {
        console.log("You want to try again")
        let tryAgain = prompt()
        if (tryAgain == "yes") {
            basicCalculator();
        }
        else {
            continueCalculating = false;
            console.log("Thank You! ")
        }
    }
}while (continueCalculating);