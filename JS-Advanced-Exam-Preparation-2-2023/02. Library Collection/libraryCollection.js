class LibraryCollection {
  //     · capacity – Number
  // · books – Array (empty)

  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    // The bookName and bookAuthor are of type string.
    // • If there's not enough space in the collection for the book, throw an Error:
    // "Not enough space in the collection."
    if (this.capacity < 1) throw new Error(`Not enough space in the collection.`);
    else this.capacity -= 1;

    // • Otherwise, this function should add the book, with the properties: bookName, bookAuthor, 
    //payed: default false, to the books array and return:
    // "The {bookName}, with an author {bookAuthor}, collect."

    this.books.push({
      bookName,
      bookAuthor,
      payed: false,
    });

    return `The ${bookName}, with an author ${bookAuthor}, collect.`
  }

  payBook(bookName) {
    // • If the book is not found, throw an Error:
    // "{bookName} is not in the collection."

    let currentBook = this.books.find((book) => book.bookName == bookName);
    if (!currentBook) throw new Error(`${bookName} is not in the collection.`);
    
    if (currentBook.payed) throw new Error(`${bookName} has already been paid.`);
    // • If the book has already paid, throw an Error:
    // "{bookName} has already been paid."
    // • Otherwise, this function set paid to true on the found book and return:
    // "{bookName} has been successfully paid."
    currentBook.payed = true;

    return `${bookName} has been successfully paid.`;

  }

  removeBook(bookName) {
    // • If the book is not found, throw an Error:
    // "The book, you're looking for, is not found."
    let currentBook = this.books.find((book) => book.bookName == bookName);
    if (!currentBook) throw new Error(`The book, you're looking for, is not found.`);

    // • If the book hasn't paid, throw an Error:
    // "{bookName} need to be paid before removing from the collection."
    if (!currentBook.payed) throw new Error(`${bookName} need to be paid before removing from the collection.`);

    // • Otherwise, this function should remove the book from the array and return:
    // "{bookName} remove from the collection."
    let index = this.books.indexOf(currentBook);

    this.books.splice(index, 1);

    //this.capacity += 1;
    //debugger;
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    // This method can be called with one parameter or without any.
    // If no parameter is provided, the method should return the full information of the library
    // • At the first line:
    // "The book collection has { emptySlots } empty spots left."
    // • On the lines, display information about each book, sorted alphabetically ascending, 
    //by their bookName:
    // "{bookName} == {bookAuthor} - {Has Paid / Not Paid}."

    let buffer = [];
    if (bookAuthor == undefined) {
        buffer.push(`The book collection has ${this.capacity} empty spots left.`);
        this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
        this.books.forEach((book) => {
            buffer.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`);
        });
    } else {
      let currentAuthor = this.books.find((author) => author.bookAuthor == bookAuthor);

      if (!currentAuthor) throw new Error(`${bookAuthor} is not in the collection.`);
      else return `${currentAuthor.bookName} == ${currentAuthor.bookAuthor} - ${currentAuthor.payed ? 'Has Paid' : 'Not Paid'}.`;
    }

    return buffer.join('\n');
    // If the method is called with a parameter for bookAuthor:
    // • Return only the information about the book from the given bookAuthor:
    // "{bookName} == {bookAuthor} - {Has Paid / Not Paid}."
    // • If there is no such author’s book found, throw an Error:
    // "{bookAuthor} is not in the collection.
  }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());