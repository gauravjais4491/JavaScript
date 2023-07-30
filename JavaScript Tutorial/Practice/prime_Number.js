import PromptSync from "prompt-sync";
const prompt = new PromptSync();

const num1 = parseInt(prompt("Enter Which Number you want to check: "))
let isPrimeOrNot = true;
let flag = false;
if (num1 < 2) {
    console.log(`${num1} Is Not Prime`);

} else if ((num1 == 2)) {
    console.log(` ${num1} IS a prime number `);

} else {
    for (let i = 2; i <= num1/2; i++) {
        if (num1 % i === 0) {
            flag = true;
        }
    }
}

if (!flag) {
    console.log(`${num1} is Prime Number`)
}
else {
    console.log(`${num1} is not Prime number`)
}