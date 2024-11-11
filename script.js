const myLibrary = [];
let bookID = 0;

const bookDisplay = document.getElementById('book-display');
const newButton = document.getElementById('new-button');
const newDialog = document.getElementById('newBookDialog');
const closeDialog = document.getElementById('close-dialog');

newButton.addEventListener('click', () => {
    newDialog.showModal();
})

closeDialog.addEventListener('click', () => {
    newDialog.close();
}
)

function Book (title, author, pages, haveRead) {
    this.id = bookID;
    bookID+= 1;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
};

function createBookChildren(book) {
    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookPages = document.createElement('div');
    const bookRead = document.createElement('div');
    
    bookTitle.innerText = `"${book.title}"`;
    bookTitle.classList.add('book-title');

    bookAuthor.innerText = `By: ${book.author}`;
    bookAuthor.classList.add('book-author');

    bookPages.innerText = `#Pages: ${book.pages}`;
    bookPages.classList.add('book-pages');

    bookRead.innerText = 'Already read?';
    const readToggle = document.createElement('input');
    readToggle.setAttribute('type', 'checkbox');
    readToggle.setAttribute('id', `book-number-${book.id}`);
    readToggle.classList.add('book-checkbox');
    const readToggleLabel = document.createElement('label');
    readToggleLabel.setAttribute('for', `book-number-${book.id}`);
    readToggleLabel.classList.add('readLabel');

    bookRead.appendChild(readToggle);
    bookRead.appendChild(readToggleLabel);
    bookRead.classList.add('book-have-read');

    return [bookTitle, bookAuthor, bookPages, bookRead];
}



function listBooks() {
    myLibrary.forEach((book) => {
        const bookEntry = document.createElement('div');
        bookEntry.classList.add('book');

        const bookChildren = createBookChildren(book);
        bookChildren.forEach((child) => {
            bookEntry.appendChild(child);
        });
        bookDisplay.appendChild(bookEntry);
        }

    )
}

function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages, false);
    myLibrary.push(newBook);
};

addBook("book1withareallylongtitleaaaaaaaaaaaaaaaaaa", "author1", "pages1");
addBook("book2", "author2", "pages2");
addBook("book3", "author3", "pages3");
addBook("book1withareallylongtitleaaaaaaaaaaaaaaaaaa", "author1", "pages1");
addBook("book2", "author2", "pages2");
addBook("book3", "author3", "pages3");
addBook("book1withareallylongtitleaaaaaaaaaaaaaaaaaa", "author1", "pages1");
addBook("book2", "author2", "pages2");
addBook("book3", "author3", "pages3");

listBooks();
