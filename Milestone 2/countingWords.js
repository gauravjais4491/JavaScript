
// const prompt = require("prompt-sync")()
// let text = prompt("Enter the string: ")
// function countWords(text) {
//     let wordCount = 0
//     for (i = 0; i < text.length; i++) {
//         if (text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57) {
//             wordCount += 1
//         }
//         else if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 122) {
//             wordCount += 0
//         }
//     }
//     console.log("Using Without Arrow Function")
//     console.log(wordCount)
// }
// countWords(text)


function countWords(text){
    let wordCount = 0;
    // let text1=text.split("")
    for (i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57) {
            wordCount += 1
        }
        else if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 122) {
            wordCount += 0
        }
    }
    return wordCount;
}
// let result=countWords(text)
// console.log(result)
module.exports=countWords