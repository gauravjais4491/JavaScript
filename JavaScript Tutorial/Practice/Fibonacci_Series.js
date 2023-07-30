import PromptSync from "prompt-sync";
const prompt = new PromptSync();

const num = parseInt(prompt("How much Fibonacci Number you want: "))


if (num == 0 || num == 1) {
    console.log(num)
}
else {
    let a = 0, b = 1, d, c = [];
    c.push(a)
    c.push(b)
    for (let i = 2; i < num; i++) {
        d = a + b
        c.push(d)
        a = b;
        b = d
    }
    console.log(`The Fibonacci series of ${num} number is: ${c}`)
}
