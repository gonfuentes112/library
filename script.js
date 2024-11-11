const myLibrary = [];

function Book (title, author, pages, haveRead) {
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
    bookAuthor.innerText = book.author;
    bookPages.innerText = book.pages;
    bookRead.innerText = book.haveRead;

    return [bookTitle, bookAuthor, bookPages, bookRead];
}

const bookDisplay = document.getElementById('book-display');

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

addBook("book1", "author1", "pages1");
addBook("book2", "author2", "pages2");
addBook("book3", "author3", "pages3");

listBooks();
