// This is the main file for the Library Management System
import readline from "readline-sync";
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        try {
            if (this.books.some(b => b.title === book.title)) {
                throw new Error(`Book with title "${book.title}" already exist`);
            }
            this.books.push(book);
        } catch (error) {
            console.error(error.message);
        }
    }
    getBook = (title) => {
        return this.books.find(book => book.title === title) || null;
    }
    getAllBooks() {
        return this.books;
    }
    removeBook(title) {
        try {
            const bookIndex = this.books.findIndex((book) => book.title === title);
            if (bookIndex === -1) {
                throw new Error(`No book with title "${title}" exists.`);
            }
            this.books.splice(bookIndex, 1);
        } catch (error) {
            console.error(error.message);
        }
    }
    findBook = (title) => {
        const book = this.books.find((book) => book.title === title);
        return book || null;
    }
    lendBook(title, user) {
        try {
            const book = this.findBook(title);
            if (!book) {
                throw new Error(`No book with title "${title}" exists.`);
            }
            if (book.isBorrowed || book.numberOfCopies === 0) {
                throw new Error(`Book with title "${title}" is not available.`);
            }
            book.isBorrowed = true;
            book.numberOfCopies -= 1;
            console.log(`${user} has borrowed "${title}"`);
        } catch (error) {
            console.error(error.message);
        }
    }
    returnBook(title, user) {
        try {
            const book = this.findBook(title);
            if (!book) {
                throw new Error(`No book with title "${title}" exists.`);
            }
            if (!book.isBorrowed) {
                throw new Error(`Book with title "${title}" is not currently borrowed.`);
            }
            book.isBorrowed = false;
            book.numberOfCopies += 1;
            console.log(`${user} has returned "${title}"`);
        } catch (error) {
            console.error(error.message);
        }
    }

    run = () => {
        const handleCommandAdd = () => {
            const title = readline.question('Enter the book title: ');
            const author = readline.question('Enter the author: ');
            const ISBN = readline.question('Enter the ISBN: ');
            const numberOfCopies = parseInt(readline.question('Enter the number of copies: '), 10);
            const newBook = new Book(title, author, ISBN, numberOfCopies);
            this.addBook(newBook);
            console.log(`"${title}" has been added.`);
        }
        let userInput = ""
        while (userInput !== "quit") {
            try {
                userInput = readline.question('Enter your command (add, remove, lend, return,CheckAvailability, quit): ');
                switch (userInput) {
                    case "add": {
                        handleCommandAdd();
                        break;
                    }
                    case "remove": {
                        const title = readline.question("What is the name of the book you want to remove: ")
                        this.removeBook(title);
                        console.log(`"${title}" has been removed.`);
                        break;
                    }
                    case "lend": {
                        const title = readline.question('Enter the book title: ');
                        const user = readline.question('Enter your name: ');
                        this.lendBook(title, user);
                        break;
                    }
                    case 'return': {
                        const title = readline.question('Enter the book title: ');
                        const user = readline.question('Enter your name: ');
                        this.returnBook(title, user);
                        break;
                    }
                    case "CheckAvailability": {
                        console.log(this.getAllBooks())
                    }
                    default:
                        break;
                }
            } catch (error) {
                console.log(`An error occurred: ${error.message}`)
            }
        }
    }
}


class Book {
    constructor(title, author, ISBN, numberOfCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numberOfCopies = numberOfCopies;
        this.isBorrowed = false;
    }
    getAvailability = () => {
        return this.numberOfCopies === 0 ? "Out of stock" : this.numberOfCopies < 10 ? "Low stock" : "In stock";
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
    borrowBook = () => {
        if (this.numberOfCopies > 0) {
            this.isBorrowed = true
            this.numberOfCopies--
        }
    }
    returnBook = () => {
        this.isBorrowed = false;
        this.numberOfCopies++
    }
}
// const myBook = new Book()
const myLibrary = new Library()

let book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 10, 5);
let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 5, 5);
let book3 = new Book("1984", "George Orwell", 8, 5);
let book4 = new Book("The Hobbit 2", "J.R.R. Tolkien", 6, 5);

myLibrary.addBook(book1)
myLibrary.addBook(book2)
myLibrary.addBook(book3)
myLibrary.addBook(book4)
myLibrary.run()
// console.log(myLibrary.getAllBooks())
// // myLibrary.removeBook("1984")
// myLibrary.removeBook("The Great Gatsby")
// console.log(myLibrary.findBook("The Hobbit"))
// myLibrary.lendBook("1984", "Gaurav")
// myLibrary.lendBook("1984", "Harshit")
// myLibrary.returnBook("The Hobbit", "Gaurav");