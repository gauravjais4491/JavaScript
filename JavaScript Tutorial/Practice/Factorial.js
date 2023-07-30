// Factorial of a Number
import PromptSync from "prompt-sync";
const prompt = new PromptSync();

const num=parseInt(prompt("Enter a number: "))
let Factorial=1;
for(let i=num;i>1;i--)
{
    Factorial*=i
}
console.log(`Factorial of ${num} is: ${Factorial}`)