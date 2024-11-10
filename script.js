function Book (title, author, pages, haveRead) {
    title = title;
    author = author;
    pages = pages;
    haveRead = haveRead;
    info = function() { return `Title: ${this.title} \n 
                    Author: ${this.title} \n 
                    Pages: ${pages} \n 
                    Read: ${this.haveRead? 'Yes' : 'No'}`;
    }
};