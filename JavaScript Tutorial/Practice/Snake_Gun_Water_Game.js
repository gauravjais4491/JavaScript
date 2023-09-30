import PromptSync from "prompt-sync";
import { InputValidationError } from "./src/error.js";
const prompt = new PromptSync();

let isPlay = true;

while (isPlay) {
    const SignUp = () => {
        // console.clear()
        underline()
        let userName = prompt("Enter your Name: ")
        underline()
        let password = prompt("Enter Your Password: ")
        underline()
        var details = {
            "Name": userName,
            "Password": password
        }
        try {
            inputValidationForUserDetails(details)
            console.clear()
            underline()
            console.log("SignUp Sucessfully!")
            login(details)

        }
        catch (error) {
            console.log(`${error}`)
            underline()
            console.log("Try to Login Again as per the Rule! ")
            SignUp()
        }
    };

    const inputValidationForUserDetails = (details) => {
        let NameRegix = /^[a-zA-Z]{4,}$/;

        if (!NameRegix.test(details["Name"].trim())) {
            throw new InputValidationError("Title must be at least 4 characters long and can only contain letters.")
        }
        return true
    };

    const login = (details) => {
        underline();
        let userLogin = prompt(`Please enter the name of registered User: `);
        underline()
        let userPassword = prompt(`Please enter the password of the registered User: `)
        underline();
        if (!(((details["Name"]) === userLogin) && ((details["Password"]) === userPassword))) {
            console.log('Invalid:  UserName or Password!');
            login(details);
        }
        else {
            console.clear();
            underline()
            console.log("Login Sucessfully!")
            get_random(details)
        }
    };

    const underline = () => {
        console.log("--------------------------------------------------------------")
    };

    const get_random = (details) => {
        underline()
        let arr = ["Snake", "Water", "Gun"]
        let computer = arr[Math.floor(Math.random() * arr.length)]
        Start(computer, arr, details)

    };

    let play_Again = (computer, details) => {
        console.log("Do you want to Play Again?:   yes or no")
        underline()
        let isPlayAgain = prompt("Waiting for Input: ")
        underline()
        switch (isPlayAgain) {
            case "yes":
                console.clear()
                underline()
                get_random(details)
                break;
            case "no":
                console.log(`Thank You for Playing, Have a nice day!`)
                underline()
                isPlay = false
                break;
            default:
                console.error('Invalid Input')
                underline()
                try_Again(computer)
                break;
        }

    };

    const Start = (computer, arr, details) => {
        console.log("Welcome to the Gaming World! ")
        underline()
        console.log("Enter your Choice: \n")
        console.log(" 1) Snake \n 2) Water \n 3) Gun \n 4) exit")
        underline()
        let User = prompt("Waiting For Input: ")
        underline()
        if (User === "exit") {
            console.log(`Thank You for Playing, Have a nice day!`)
            underline()

            isPlay = false
        }
        else {
            inputValidation(User, computer, arr, details)
        }

    };

    const inputValidation = (User, computer, arr, details) => {
        if (arr.includes(User)) {
            Snake_Gun_Water_Game(User, computer, details)
        }
        else {
            console.log("Invalid Input!")
            try_Again(computer, arr, details)
        }
    };

    let try_Again = (computer, arr, details) => {
        console.log(`Do you want to Try Again?:   yes or no : `)
        underline()
        let isTryAgain = prompt("Waiting for Input: ")
        underline()
        switch (isTryAgain) {
            case "yes":
                Start(computer, arr, details);
                break;
            case "no":
                console.log(`Thank You for Playing, Have a nice day!`)
                isPlay = false;
                break
            default:
                console.error("Invalid Input")
                underline()
                try_Again(computer, arr, details)
        }
    };



    const Snake_Gun_Water_Game = (User, computer, details) => {
        if ((computer === "Snake" && User === "Water") || (computer === "Gun" && User === "Snake") || (computer === "Water" && User === "Gun")) {
            console.log(`Sorry! ${details.Name} Lost this Game!`)
        }
        else if ((User === "Snake" && computer === "Water") || (User === "Gun" && computer === "Snake") || (User === "Water" && computer === "Gun")) {
            console.log(`Congratulations! ${details.Name} Won this Game`)
        }
        else {
            console.log("Draw!")
        }
        underline()
        play_Again(computer, details)
    };
    SignUp()

}
