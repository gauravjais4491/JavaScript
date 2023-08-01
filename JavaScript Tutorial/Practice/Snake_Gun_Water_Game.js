import PromptSync from "prompt-sync";
const prompt = new PromptSync();

let arr = ["Snake", "Water", "Gun"]

let computer = Math.floor(Math.random() * arr)


let isPlay = true;

while (isPlay) {

    const underline=()=>{
        console.log("----------------------------------")
    }

    let try_Again = () => {
        console.log(`Do you want to play Again? \n yes or no: `)
        let isTryAgain = prompt()
        if (isTryAgain === "yes") {
            Start();
        }
        else if (isTryAgain === "no") {
            console.log(`Thank You for Playing, Have a nice day!`)
            isPlay=false;
        }
        else {
            console.error("Invalid Input")
            try_Again()
        }
    }
    
    const inputValidation = (User) => {
        if (arr.includes(User)) {
            isPlay=false;
        }
        else {
            console.log("Invalid Input!")
            try_Again()
        }
    }

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
