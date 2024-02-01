const myLibrary = [];
function Book(title, author, pages, read, isRead, info) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.isRead = function() {
        if (this.read === true) {
            return "is read";
        } else {
            return "is not read yet";
        }
    };
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead()}.`);
    };

};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);


function addBookToLibrary() {

        title = prompt('Please Enter Book Title: ');
        author = prompt('Please Enter the Author');
        pages = prompt('Please Enter The Pages');
        let sRead = prompt('Have You Read The Book? true/false');
        isRead = (sRead.toLowerCase() === 'true');

        let addedBook = new Book(title, author, pages, isRead);
    
    myLibrary.push(addedBook);
    console.table(myLibrary);

};