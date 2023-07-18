const prompt = require("prompt-sync")()

const longestWord = (sentance) => {
    const wordsArray = sentance.split(' ');
    let longestWord = ""
    wordsArray.forEach((word) => {
        if(word.length>longestWord.length)
        {
            longestWord= word;
        }
    });
    return longestWord
}
let sentance = prompt("Enter a sentance: ");
let longestWordResult = longestWord(sentance)
console.log(`The Longest Word is "${longestWordResult}" and it's length is '${longestWordResult.length}'`)