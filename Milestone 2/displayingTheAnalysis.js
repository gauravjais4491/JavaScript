const prompt = require("prompt-sync")()

// const analyzingReadability = require("./analyzingReadability");
// const countCharacters = require("./countingCharacters");
// const countSentance = require("./countingSentences");
// const countWords = require("./countingWords");
// const analyzeReadability=require("./analyzingReadability")

// let text = prompt("Enter a sentance: ")

// let character_count = countCharacters(text)
// let count_sentance = countSentance(text)
// let word_count = countWords(text)
// let ARI=analyzeReadability(text)

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
displaySummary()

