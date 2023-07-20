// This is the main file for the Li(brary Management System
const prompt=require("prompt-sync")()
class Library {
    constructor() {
        this.books = [];
    }
    addBook = (myBook) => {
        this.books.push(myBook)
    }
    getBook = (title) => {
        return this.books.find(book=>book.title===title) || null;
    }
    getAllBooks() {
        return this.books;
    }
    removeBook(title) {
        const bookIndex=this.books.findIndex(book=>book.title===title);
        if(bookIndex!==-1)
        {
            this.books.splice(bookIndex,1)
        }
    }
    findBook = (title) => {
        return this.books.find(myBook=>myBook.title===title) || null;
    }
    lendBook(title,user)
    {
        const book=this.findBook(title)
        if(book && !book.isBorrowed && book.numberOfCopies>0)
        {
            book.isBorrowed=true;
            book.numberOfCopies-=1
            console.log(`${user} has borrowed "${title}"`)
        }
        else{
            console.log(`Sorry, "${title} is not available."`)
        }
    }
    returnBook=(title,user)=>{
        const book=this.findBook(title);
        if(book && book.isBorrowed)
        {
            book.isBorrowed=false;
            book.numberOfCopies+=1
            console.log(`${user} returned the book with titile: "${title}" ` )
        }
        else{
            console.log(`Sorry, "${title}" is not borrowed.`)
        }
    }
}


class Book {
    constructor(title, author, ISBN,numberOfCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numberOfCopies = numberOfCopies;
        this.isBorrowed = false;
    }
    getAvailablity = () => {
        if (this.numberOfCopies >= 10) {
            console.log(`${this.title}: The book has more than enough copies available`)
        }
        else if (this.numberOfCopies > 0 || this.numberOfCopies < 10) {
            console.log(`Currently there are only ${this.numberOfCopies}`)
        }
        else {
            console.log('Out Of Stock')
        }
    }
    sell = (number) => {
        if (number == null) {
            number = 1;
        }
        this.numberOfCopies -= number
    }
    restock = (number) => {
        if (number === null) {
            number = 5;
        }
        this.numberOfCopies += number
    }
    borrow = () => {
        if (this.numberOfCopies > 0) {
            this.isBorrowed = true
            this.numberOfCopies--
        }
    }
    return = () => {
        this.isBorrowed = false;
        this.numberOfCopies++
    }


}
const myBook = new Book()
const myLibrary = new Library()

let book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 10,5);
let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 5,5);
let book3 = new Book("1984", "George Orwell", 8,5);

myLibrary.addBook(book1)
myLibrary.addBook(book2)
myLibrary.addBook(book3)
console.log(myLibrary.getAllBooks())
myLibrary.removeBook("1984")
console.log(myLibrary.findBook("The Hobbit"))
myLibrary.lendBook("1984","Gaurav")
myLibrary.lendBook("1984","Harshit")
myLibrary.returnBook("1984", "Gaurav");

