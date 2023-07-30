
// const prompt=require("prompt-sync")()

// let text=prompt("Enter the string: ")
function countCharacters(text){
    let characterCount=0
    for(i=0;i<text.length;i++)
    {
        if (text.charCodeAt(i)>=48 && text.charCodeAt(i)<=57){
            characterCount+=0
        }
        else if(text.charCodeAt(i)>=65 && text.charCodeAt(i)<=122)
        {
            characterCount+=1
        }
    }
    return characterCount
}
// countCharacters(text)
module.exports=countCharacters;
    

// let characterCount=countCharacters(text)
// console.log(characterCount)

