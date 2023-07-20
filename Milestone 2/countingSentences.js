// const prompt=require("prompt-sync")()
// let sentance=prompt("Enter a sentance: ")
function countSentance(sentance){let sentenceCount=0
    let arr=sentance.split("")
    for(i=0;i<arr.length;i++)
    {
        if((arr[i].includes(".")) || arr[i].includes("?") || arr[i].includes("!")){
            sentenceCount+=1
        }
        else{
            sentenceCount+=0
        }
    }
    return sentenceCount;
}
// let sentenceCountResult=countSentance(sentance)
// console.log(sentenceCountResult)
// let result=countSentance(sentance)
// console.log(result)
module.exports=countSentance;
