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
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead()}.`);
    };

};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
