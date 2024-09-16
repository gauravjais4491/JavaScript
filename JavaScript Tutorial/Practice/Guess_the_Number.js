// Guess_the_Number

import PromptSync from "prompt-sync";
const prompt = new PromptSync();

let underline = () => {
    console.log("------------------------------------------------")
}

let generate_number = () => {
    console.clear()
    let Number_To_Guess = Math.floor((Math.random() * 100) + 1);
    let Number_Of_Guess = 0;
    Start(Number_To_Guess, Number_Of_Guess)
}

let Start = (Number_To_Guess, Number_Of_Guess) => {
    underline()
    let Guess_The_Number = parseInt(prompt("Guess The Number: Between {1 to 100}: "))
    underline()
    Guess_The_Number_Function(Guess_The_Number, Number_To_Guess, Number_Of_Guess)

}

const Guess_The_Number_Function = (Guess_The_Number, Number_To_Guess, Number_Of_Guess) => {
    do {
        if (Guess_The_Number > Number_To_Guess) {
            console.log(`${Guess_The_Number} is Greater than Expected Number`)
            Number_Of_Guess++
            try_Again(Number_To_Guess, Number_Of_Guess)
        }
        else if (Guess_The_Number < Number_To_Guess) {
            console.log(`${Guess_The_Number} is less than Expected Number`)
            Number_Of_Guess++
            try_Again(Number_To_Guess, Number_Of_Guess)
        }
        else if (Guess_The_Number === Number_To_Guess) {
            console.log("Hurrah! You Guess the Number")
            underline()
            Number_Of_Guess++
            console.log(`The Number of Guesses is ${Number_Of_Guess}`)
            play_Again()
            break;
        }
    } while (Guess_The_Number === Number_To_Guess);
}

let try_Again = (Number_To_Guess, Number_Of_Guess) => {
    underline()
    console.log(`Do you want to try Again? yes or no: `)
    underline()
    let isTryAgain = prompt("Waiting for Input: ")
    switch (isTryAgain) {
        case "yes":
            Start(Number_To_Guess, Number_Of_Guess);
            break;
        case "no":
            underline()
            console.log(`Thank You for Playing, Have a nice day!`)
            underline()
            break;
        default:
            console.error("Invalid Input")
            try_Again(Number_To_Guess, Number_Of_Guess)
    }

}
let number_Of_Times_You_Played = 1

let play_Again = () => {
    underline()
    console.log(`You have played this game only ${number_Of_Times_You_Played} Times.`)
    underline()
    console.log(`Do you Want To Try again? yes or no: `)
    underline()
    number_Of_Times_You_Played++
    let isPlayAgain = prompt("Waiting for Input: ")
    switch (isPlayAgain) {
        case "yes":
            console.clear()
            generate_number();
            break;
        case "no":
            underline()
            console.log("Thanks For playing")
            underline()
            break;

        default:
            console.error('Invalid Input')
            try_Again()

    }
}


generate_number()
