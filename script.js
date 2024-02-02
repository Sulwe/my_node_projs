const myLibrary = [];
function Book(title, author, pages, read, isRead, info) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    /*this.isRead = function() {
        if (this.read === true) {
            return "is read";
        } else {
            return "is not read yet";
        }
    };
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead()}.`);
    };*/

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

function createTable(tableData) {

    const headers = Object.keys(myLibrary[0]);

    const table = document.getElementById('books');
    const headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        const header = document.createElement('th');
        const textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    myLibrary.forEach(book => {
        const row = document.createElement('tr');

        Object.values(book).forEach(text => {
            const cell = document.createElement('td');
            const textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        const btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.classList.add('delete');
        row.appendChild(btn);
        btn.onclick = 'deleteRow()';
        table.appendChild(row);

        btn.addEventListener('click', () => {
            table.removeChild(row);
        })
    });

    

 
}

