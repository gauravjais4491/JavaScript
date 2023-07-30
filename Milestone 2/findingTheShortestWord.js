const prompt = require("prompt-sync")()

const shortestWord = (sentance) => {
    const wordsArray = sentance.split(' ');
    let shortestWord = "My name is Gaurav Kumar Jaiswal"
    wordsArray.forEach((word) => {
        if(word.length<shortestWord.length)
        {
            shortestWord= word;
        }
    });
    return shortestWord
}
let sentance = prompt("Enter a sentance: ");
let shortestWordResult = shortestWord(sentance)
console.log(`The Shortest Word is "${shortestWordResult}" and it's length is '${shortestWordResult.length}'`)