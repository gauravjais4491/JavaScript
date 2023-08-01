import PromptSync from "prompt-sync";
const prompt = new PromptSync();

let arr=["Sanke","Water","Gun"]

let computer=Math.floor(Math.random()*arr)

console.log(" 1) Sanke \n 2) Water \n 3) Gun")
let User=prompt(`Enter Your Choice: `)
let isPlay=true;

const inputValidation=(User)=>{
    if(arr.includes(User))
    {
        
    }
    else{
        console.log("Invalid Input!")
    }
}

inputValidation(User)