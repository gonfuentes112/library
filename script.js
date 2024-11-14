const myLibrary = [];
let bookID = 0;

const bookDisplay = document.getElementById('book-display');
const newButton = document.getElementById('new-button');
const newDialog = document.getElementById('newBookDialog');
const closeDialog = document.getElementById('close-dialog');

const newTitle = document.getElementById('new-book-title');
const newAuthor = document.getElementById('new-book-author');
const newPages = document.getElementById('new-book-pages');
const newAlreadyRead = document.getElementById('already-read-yes');
const confirmButton = document.getElementById('confirm-submit-button');

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

function createNewEntry(book) {
    const bookEntry = document.createElement('div');
    bookEntry.classList.add('book');
    bookEntry.dataset.bookId = book.id;

    const bookChildren = createBookChildren(book);
    bookChildren.forEach((child) => {
        bookEntry.appendChild(child);
    });
    bookDisplay.appendChild(bookEntry);
    const newCheckbox = bookChildren[3].querySelector('.book-checkbox');
    if (book.haveRead) {
        newCheckbox.checked = true;
        newCheckbox.dispatchEvent(new Event('change'));
    }
}

function listBooks() {
    myLibrary.forEach((book) => {
        createNewEntry(book);
        })
}

function addBook(title, author, pages, hasRead=false) {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
};

function submitNewBook(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    addBook(newBook);
    createNewEntry(newBook);
}

confirmButton.addEventListener('click', (event) => {
    event.preventDefault();
    submitNewBook(newTitle.value,
                 newAuthor.value,
                 newPages.value,
                 newAlreadyRead.checked
     );
    newDialog.close();
});

addBook("book1withareallylongtitleaaaaaaaaaaaaaaaaaa", "author1", "pages1");
addBook("book2", "author2", "pages2");
addBook("book3", "author3", "pages3");

listBooks();
