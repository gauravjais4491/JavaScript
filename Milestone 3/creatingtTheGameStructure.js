const prompt = require("prompt-sync")()

const actions = ["look", "talk", "move north", "move south", "move east", "move west", "pick up item", "move"]

console.log("In which direction you want to move: ")
console.log("1) move north")
console.log("2) move south")
console.log("3) move west")
console.log("4) move east")
const direction = prompt("")
const scene = [
    {
        name: "Rishikesh",
        Discription: "You can do rafting here!",
        items: [],
        connection: "move north"
    },
    {
        name: "Goa",
        Discription: "You can see bitches, clubs,...!",
        items: [],
        connection: "move south"

    },
    {
        name: "Zoo",
        Discription: "You can see animals here",
        items: [],
        connection: "move west"
    }
];

const player = {
    name: "",
    location: scene[0],
    inventry: [],
    health: 100
}
const nonplayerCharacter = {
    name: "Gaurav",
    location: scene[1],
    dialouge: "hello Gaurav"
}
const displayScene = (scene) => {
    console.log(scene.Discription)
    if (player.location === scene.location) {
        console.log("You are Here!")
    }
    else if (nonplayerCharacter.location === scene.location) {
        console.log(nonplayerCharacter.name)
    }

}

const addItemTonventory = (item, inventry) => {
    inventry.push(item)
}

const logAction = (action, message) => {
    const logEntry = `Action: ${action} | Message: 
    ${message}`
    console.log(logEntry)
}
const look = () => {
    logAction("look", "you looked up")
    displayScene(player.location)
}
const talk = () => {
    logAction("talk", "you started a conversation")
    if (player.location === nonplayerCharacter.location) {
        console.log(`Talking with ${nonplayerCharacter}`)
    }

}
const pickupitem = () => {
    logAction("pickupitem", "you picked up new item")
    addItemTonventory("magic wand", player.inventry)
    console.log("you picked up your magic wand!")
    console.log("Your Inventry: ", player.inventry)
}
const move = (direction) => {
    logAction("move", "You moved to a new scene")
    if (scene.find()) {
        switch (direction) {
            case "move north":
                console.log("move north")
                break;
            case "move south":
                console.log("move south")
                break;
            case "move east":
                console.log("move east")
                break;
            case "move west":
                console.log("move west")
                break;
        }
    }

}
processInput = (input) => {
    for (let i in actions) {
        if (input === actions[i]) {
            switch (actions[i]) {
                case "look":
                    look()
                    break;
                case "talk":
                    if (player.location === nonplayerCharacter.location) {
                        talk()
                    }
                    break;
                case "move":
                    move(direction)
                    break;
                case "pick up item":

                    pickupitem()
                    break;
            }
        }
    }

}

startGame = () => {
    console.log("Welcome to the Text Adventure Game!")
    processInput("move")
}
startGame()