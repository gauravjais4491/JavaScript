class Note{
    constructor(title,content)
    {
        this.title=title;
        this.content=content;
    }
    displayNotes=()=>{
        console.log(`Title: ${this.title}\nContent:${this.content}`);
    }


}
export default Note;

// const o = {
//     a: () => {}
// }

// o.a()