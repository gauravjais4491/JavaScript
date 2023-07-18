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
    console.log(ARI)
}
analyzeReadability(text)


module.exports=analyzeReadability()

