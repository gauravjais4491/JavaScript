// Guess_the_Number

import PromptSync from "prompt-sync";
const prompt = new PromptSync();



let generate_number = () => {
    let Number_To_Guess = Math.floor((Math.random() * 100) + 1);
    let Number_Of_Guess = 0;
    Start(Number_To_Guess, Number_Of_Guess)
}

let Start = (Number_To_Guess, Number_Of_Guess) => {
    let Guess_The_Number = parseInt(prompt("Guess The Number: "))
    Guess_The_Number_Function(Guess_The_Number, Number_To_Guess, Number_Of_Guess)

}

const Guess_The_Number_Function = (Guess_The_Number, Number_To_Guess, Number_Of_Guess) => {
    do {
        if (Guess_The_Number > Number_To_Guess) {
            console.log(`${Guess_The_Number} is Greather than Expected Number`)
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
            Number_Of_Guess++
            console.log(`The Number is Guesses is ${Number_Of_Guess}`)
            play_Again()
            break;
        }
    } while (Guess_The_Number === Number_To_Guess);
}

let try_Again = (Number_To_Guess, Number_Of_Guess) => {
    console.log(`Do you want to play Again? \n yes or no: `)
    let isTryAgain = prompt()
    if (isTryAgain === "yes") {
        Start(Number_To_Guess, Number_Of_Guess);
    }
    else if (isTryAgain === "no") {
        console.log(`Thank You for Playing, Have a nice day!`)
    }
    else {
        console.log('Invalid Input')
        try_Again(Number_To_Guess, Number_Of_Guess)
    }
}
let number_Of_Times_You_Played=1

let play_Again = () => {
    console.log(`You have played this game only ${number_Of_Times_You_Played} Times.\n Do you Want To Try again?  \n yes or no: `)
    number_Of_Times_You_Played++
    let isPlayAgain = prompt()
    if (isPlayAgain === "yes") {
        generate_number();
    }
    else if (isPlayAgain === "no") {
        console.log("Thanks For playing")
    }
    else {
        console.log('Invalid Input')
        try_Again()
    }
}


generate_number()
