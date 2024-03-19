import PromptSync from "prompt-sync";
const prompt = new PromptSync();

class PlaylistManager {
    constructor() {
        this.users = {};
        this.count = 1;
        this.addSong = true;
    }

    validateNumberInput(input) {
        const parsedInput = parseInt(input);
        if (isNaN(parsedInput) || parsedInput <= 0) {
            console.error("Invalid input. Please enter a positive integer.");
            return false;
        }
        return true;
    }

    validateYesNoInput(input) {
        if (input.toLowerCase() !== 'yes' && input.toLowerCase() !== 'no') {
            console.error("Invalid input. Please enter 'yes' or 'no'.");
            this.underline()
            return false;
        }
        return true;
    }

    validateUserSelection(selectedUser) {
        if (!this.users[selectedUser]) {
            console.error("User not found!");
            return false;
        }
        return true;
    }

    addSongToUser(selectedUser, songToAdd) {
        const userArray = this.users[selectedUser];
        if (userArray.length >= 3) {
            userArray.shift();
        }
        userArray.push(songToAdd);
        this.addMoreSong();
    }

    createUserObjects(num) {
        if (!this.validateNumberInput(num)) return;
        for (let i = 1; i <= num; i++) {
            this.users[`User${i}`] = [];
        }
        this.playlistStatus();
    }

    managePlaylist() {
        const getUserInput = () => {
            const Number_Of_User = prompt("Tell me the number of users you want to store in the database:");
            this.createUserObjects(Number_Of_User);
            this.songPlaylistProblem();
        };

        getUserInput();
    }

    addMoreSong() {
        console.log(`Do you want to add more songs? (yes/no):`);
        this.underline()
        const isAddSong = prompt("Waiting for Input: ");
        this.underline()
        if (!this.validateYesNoInput(isAddSong)) {
            this.addMoreSong();
        }
        else {

            switch (isAddSong.toLowerCase()) {
                case "yes":
                    this.songPlaylistProblem();
                    break;
                case "no":
                    console.log(`Thank you for visiting. Have a nice day!`);
                    this.addSong = false;
                    this.playlistStatus();
                    break;
                default:
                    console.error("Invalid input");
                    this.addMoreSong();
            }
        }
    }

    songPlaylistProblem() {
        for (const key in this.users) {
            console.log(key);
        }
        this.underline()
        let selectedUser;
        do {
            selectedUser = prompt(`In which user do you want to play a song:`);
        } while (!this.validateUserSelection(selectedUser));

        this.underline();
        const songToAdd = prompt(`Enter a song to add for ${selectedUser}:`);
        this.underline();

        this.addSongToUser(selectedUser, songToAdd);
    }

    playlistStatus() {
        this.underline()
        if (this.count === 1) {
            console.log("Initial Playlist Status:\n");
            this.count++;
        } else {
            console.log("Updated Playlist Status:\n");
        }
        console.log(this.users);
        this.underline();
    }

    underline() {
        console.log("------------------------------------------------");
    }
}

const playlistManager = new PlaylistManager();
playlistManager.managePlaylist();
