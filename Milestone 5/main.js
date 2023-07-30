import Note from "./src/note.js";
import fs from "fs"
import promisify from "util"
import promptSync from 'prompt-sync';
import { validateHeaderValue } from "http";
import InputValidationError from "./src/note.js"
import { error } from "console";

const prompt = promptSync();
let noteslist = []
const underline = () => {
    console.log("-----------------------------------------------")
};

const welcomeMessage = () => {
    console.log("Welcome to the Note-Taking Application!")
    underline()
};

const createNote = (title, content) => {
    try {
        validateInput(title, content)
    }
    catch (error) {
        if (error instanceof InputValidationError) {
            console.log(error.message)
            return
        }
        throw error
    }
    const newNote = new Note(title, content)
    noteslist.push(newNote)

};

const deleteNote = (title) => {
    try {
        validateInput(title, newContent)
    }
    catch (error) {
        if (error instanceof InputValidationError) {
            console.log(error.message)
            return
        }
        throw error
    }
    let index = noteslist.findIndex(note => note.title === title)
    if (index >= 0) {
        noteslist.splice(index, 1)
        console.log(`${title} is deleted from notesList`)
    }
    else {
        console.log(`No such title ${title}`)
    }
    underline()
};

const editNote = (title, newContent) => {
    try {
        validateInput(title, newContent)
    }
    catch (error) {
        if (error instanceof InputValidationError) {
            console.log(error.message)
            return
        }
        throw error
    }
    let noteToEdit = noteslist.find(note => note.title === title)
    if (noteToEdit) {
        noteToEdit.content = newContent
        console.log(`Note with title '${title}' has been updated.`);
    }
    else {
        console.log(`No such title ${title}`)
    }

    underline()
};

const saveNotes = async () => {
    const writeFileAsync = promisify(fs.writeFile);
    try {
        const data = JSON.stringify(noteslist);
        await writeFileAsync('notes.json', data);
        console.log('Notes saved to notes.json.');
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

const validateInput = (title, content) => {
    const titleRegex = /[\s\w]{3,}/;
    const contentRegex = /.{5,}/;

    if (!titleRegex.test(title.trim())) {
        throw new InputValidationError("Error: Title must be at least 3 characters long and can only contain letters, numbers, spaces, and hyphens.")
    }

    if (!contentRegex.test(content.trim())) {
        throw new InputValidationError('Error: Content must be at least 5 characters long.');
    }

    return true;
};

const displayAllNotes = () => {
    for (const notes of noteslist) {
        notes.displayNotes();
        underline()
    }
};

createNote('First Note', 'This is the first note.');
createNote('Second Note', 'This is the second note.');
createNote('Third Note', 'This is the third note.');


let title = prompt("Enter the title of the notes: ");
let content = prompt("Enter the content of the title: ")


deleteNote(title)
// displayAllNotes()
// underline()
// welcomeMessage()
// displayAllNotes()
// editNote(title, content)
// displayAllNotes()
