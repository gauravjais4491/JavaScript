import PromptSync from "prompt-sync";
const prompt = new PromptSync();

let arr = ["Snake", "Water", "Gun"]

let computer = Math.floor(Math.random() * arr)


let isPlay = true;

while (isPlay) {
    const Start=()=>{
        underline()
        console.log("Welcome to the Gaming World! ")
        underline()
        console.log(" 1) Snake \n 2) Water \n 3) Gun")
        let User = prompt(`Enter Your Choice: `)
        inputValidation(User)
    }
    Start()
}
