class Book {
    constructor(bookID, title, author, pages, haveRead) {
        this.id = bookID;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead;
    }   

}

class Library {
    constructor() {
    this.myLibrary = [];
    this.bookID = 0;
    };

    addBook(title, author, pages, hasRead=false) {
        const newBook = new Book(this.bookID, title, author, pages, hasRead);
        this.bookID++;
        this.myLibrary.push(newBook);
        return newBook;
    };
    removeBookFromArray(id) {
        if (id >= 0 && id < this.myLibrary.length) {
            this.myLibrary[id] = null;
        }
    };

    toggleReadInArray(id) {
        if (id >= 0 && id < this.myLibrary.length) {
            this.myLibrary[id].haveRead = !(myLibrary[id].haveRead);
        }
    };
    
}

function libraryController() {
    const bookDisplay = document.getElementById('book-display');
    const newButton = document.getElementById('new-button');
    const newDialog = document.getElementById('newBookDialog');
    const closeDialog = document.getElementById('close-dialog');

    newButton.addEventListener('click', () => {
        newDialog.showModal();
    });
    
    closeDialog.addEventListener('click', () => {
        newDialog.close();
    }
    );
    
    const newTitle = document.getElementById('new-book-title');
    const newAuthor = document.getElementById('new-book-author');
    const newPages = document.getElementById('new-book-pages');
    const newAlreadyRead = document.getElementById('already-read-yes');
    const confirmButton = document.getElementById('confirm-submit-button');
    
    const myLibrary = new Library();
    myLibrary.addBook("book1withareallylongtitleaaaaaaaaaaaaaaaaaa", "author1", "pages1");
    myLibrary.addBook("book2", "author2", "pages2");
    myLibrary.addBook("book3", "author3", "pages3");

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
            newCheckbox.dispatchEvent(new Event('change')); //manually trigger CSS change to modify style
        }
    
        bookEntry.addEventListener('click', removeBook);
        bookEntry.addEventListener('click', toggleRead);
    }

    myLibrary.myLibrary.forEach((book) => {
            createNewEntry(book);
            });


    function removeBook(event) {
        const target = event.target;
        if (target.classList.contains('book-remove-button')) {
            const bookId = event.currentTarget.dataset.bookId;
            myLibrary.removeBookFromArray(bookId);
            event.currentTarget.remove();
        }
    }
    
    function toggleRead(event) {
        const target = event.target;
        if (target.classList.contains('readLabel')) {
            const bookId = event.currentTarget.dataset.bookId;
            myLibrary.toggleReadInArray(bookId);
        }    
    }
    
    
    
    function createBookChildren(book) {
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookRead = document.createElement('div');
        const bookRemove = document.createElement('div');
        const bookRemoveButton = document.createElement('button');
        
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
    
    
        bookRemoveButton.innerText = "Remove";
        bookRemoveButton.classList.add('book-remove-button');
        bookRemove.classList.add('book-remove');
        bookRemove.appendChild(bookRemoveButton);
    
        return [bookTitle, bookAuthor, bookPages, bookRead, bookRemove];
    }
    
   
    function submitNewBook(title, author, pages, hasRead) {
        const newBook = myLibrary.addBook(title, author, pages, hasRead);
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
}
libraryController();




