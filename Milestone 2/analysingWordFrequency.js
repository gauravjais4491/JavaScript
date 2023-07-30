const promt = require("prompt-sync")()
let sentance = promt("")
function wordFrequency(sentance) {
    let wordCount = {};
    let arr = sentance.split(" ")
    for (i = 0; i < arr.length; i++) {
        arr[i].toLowerCase();

        // if (!wordCount[arr[i]]) {
        //     // If the key doesn't exist, create it with a value of 1
        //     wordCount[arr[i]] = 0;
        // }
        // ++wordCount[arr[i]];
    }
    console.log(`Word: ${arr[i]}, Count:${wordCount[arr[i]]}`)
}
wordFrequency(sentance)
