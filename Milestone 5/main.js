import Note from "./src/note.js";

let noteslist = []

const underline=()=>{
    console.log("-----------------------------------------------")
}

const welcomeMessage = () => {
    console.log("Welcome to the Note-Taking Application!")
    underline()
}

const createNote = (title, content) => {
    const newNote = new Note(title, content)
    noteslist.push(newNote)
}


const deleteNote=(title)=>{
    let index=noteslist.findIndex(note=>note.title===title)
    if(index>=0)
    {
        noteslist.splice(index,1)
        console.log(`${title} is deleted from notesList`)
        
    }
    else{
        console.log(`No such title ${title}`)
    }
    underline()
}


const editNote=(title,newContent)=>{
    let noteToEdit=noteslist.find(note=>note.title===title)
    if(noteToEdit)
    {
        noteToEdit.content=newContent
        console.log(`Note with title '${title}' has been updated.`);
    }
    else{
        console.log(`No such title ${title}`)
    }
    underline()

}

const displayAllNotes = () => {
    for (const note of noteslist) {
        note.displayNotes();
        underline()
    }
    
}
createNote('First Note', 'This is the first note.');
createNote('Second Note', 'This is the second note.');
createNote('Third Note', 'This is the third note.');



// deleteNote("Second Nots")
// displayAllNotes()
underline()
welcomeMessage()
displayAllNotes()
editNote('First Note',"Hello Gaurav")
displayAllNotes()