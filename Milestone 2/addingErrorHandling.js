const prompt = require("prompt-sync")()

const countCharacters = require("./countingCharacters");
const countSentance = require("./countingSentences");
const countWords = require("./countingWords");

let text = prompt("Enter a sentance: ")

let character_count = countCharacters(text)
let count_sentance = countSentance(text)
let word_count = countWords(text)

analyzeReadability = () => {
    let ARI = ((4.71 * (character_count / word_count)) + (0.5 * (word_count / count_sentance)) - 21.43)
    return ARI
}

let ARI=analyzeReadability()

displaySummary=()=>{
    console.log(`The Character count for this "${text}" is ${character_count}`)
    console.log(`The Word count for this "${text}" is ${word_count}`)
    console.log(`The ARI for this "${text}" is ${ARI}`)
    console.log(`The Sentance count for this "${text}" is ${count_sentance}`)
}

// function inputValidation(text)
// {
//     if(!text.trim())
//     {
//         console.log("Invalid Input")
        
//     }
//     else{
//         displaySummary()
//     }
// }
// inputValidation(text);
handingUserInput=(text)=>{
try {
    if(!text.trim())
    {
        throw new Error("Error: Please enter non empty Text.")
    }
    else if(![".",'?','!'].includes(text))
    {
        throw new Error("Text analysis should proceed as usual")
    }
    displaySummary();
} catch (error) {
    console.log(error.message)
}
};
handingUserInput(text)