// const colors=['red', 'blue',"green",'yellow'];
// console.log("1--------------------------------------------------------")
// console.log(colors[1]+'\n\n');
// console.log("2--------------------------------------------------------")
// colors[2]='purple';
// console.log(colors);
// console.log(colors.length);
// console.log("3--------------------------------------------------------")
// colors.push('Orange');
// console.log(colors);
// console.log("4--------------------------------------------------------")
// colors.unshift('white');
// console.log(colors);
// console.log("5--------------------------------------------------------")
// colors.pop();
// console.log(colors);
// console.log("6--------------------------------------------------------")
// colors.shift();
// console.log(colors);
// console.log("7--------------------------------------------------------")
// colors.splice(1,2,'pink','teal');
// console.log(colors);
// console.log("8--------------------------------------------------------")
// const moreColors=['brown','gray'];
// const allColors=colors.concat(moreColors);
// console.log(allColors);
// console.log("9--------------------------------------------------------")

let prompt=require("prompt-sync")()

function validInput(userInputs){
    let validOperations=['Addition','Substraction','Multiplication','Division']
    // for(let i=0;i<validOperations.length;i++)
    // {
    //     if(userInputs==validOperations[i])
    //     {
    //         console.log("Valid Input")
    //     }
    //     else{
    //         console.log("Invalid Input")
    //     }
    // }
    console.log(validOperations.includes(userInputs))
}
console.log("Addition, Substraction, Multiplication, Division")
let userInputs=prompt("Enter your choice: ")
validInput(userInputs)

