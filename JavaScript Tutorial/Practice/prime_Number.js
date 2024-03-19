import PromptSync from "prompt-sync";
const prompt = new PromptSync();

const num1 = parseInt(prompt("Enter Which Number you want to check: "))
let isPrimeOrNot = false;
if (num1 < 2) {
    isPrimeOrNot = true

} else if ((num1 == 2)) {
    isPrimeOrNot = false;

} else {
    for (let i = 2; i <= num1/2; i++) {
        if (num1 % i === 0) {
            isPrimeOrNot = true;
        }
    }
}

if (!isPrimeOrNot) {
    console.log(`${num1} is Prime Number`)
}
else {
    console.log(`${num1} is not Prime number`)
}