let prompt = require("prompt-sync")();


let userChoice =  prompt(`Enter Which operation you want to perform \n + for addition \n - for substraction \n / for division \n * for multiplication \n`);

let firstnumber = parseInt(prompt("Enter First number: "));
let secondnumber = parseInt(prompt("Enter second number: "));

console.log("\n\nBasic Calulator using Switch-Case ");
switch (userChoice) {
    case '+':
        console.log(firstnumber + secondnumber);
        break;

    case '-':
        console.log(firstnumber - secondnumber);
        break;

    case '*':
        console.log(firstnumber * secondnumber);
        break;

    case '/':
        console.log(firstnumber / secondnumber);
        break;

    default:
        console.log("Invalid Input")
}


console.log("\n\nBasic Calulator using If-Else ")

if(userChoice=='+')
{
    console.log(firstnumber+secondnumber);
}
else if(userChoice=='')
{
    console.log(firstnumber-secondnumber);
}
else if(userChoice==3)
{
    console.log(firstnumber*secondnumber);
}
else if(userChoice==4){
    console.log(firstnumber/secondnumber);
}
else
{
    console.log("Invalid choice");
}