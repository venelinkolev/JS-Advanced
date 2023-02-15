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
    // • Otherwise, this function should add the book, with the properties: bookName, bookAuthor, payed: default false, to the books array and return:
    // "The {bookName}, with an author {bookAuthor}, collect."
  }

  payBook(bookName) {
    // • If the book is not found, throw an Error:
    // "{bookName} is not in the collection."
    // • If the book has already paid, throw an Error:
    // "{bookName} has already been paid."
    // • Otherwise, this function set paid to true on the found book and return:
    // "{bookName} has been successfully paid."
  }

  removeBook(bookName) {
    // • If the book is not found, throw an Error:
    // "The book, you're looking for, is not found."
    // • If the book hasn't paid, throw an Error:
    // "{bookName} need to be paid before removing from the collection."
    // • Otherwise, this function should remove the book from the array and return:
    // "{bookName} remove from the collection."
  }

  getStatistics(bookAuthor) {
    // This method can be called with one parameter or without any.
    // If no parameter is provided, the method should return the full information of the library
    // • At the first line:
    // "The book collection has { emptySlots } empty spots left."
    // • On the lines, display information about each book, sorted alphabetically ascending, by their bookName:
    // "{bookName} == {bookAuthor} - {Has Paid / Not Paid}."
    // If the method is called with a parameter for bookAuthor:
    // • Return only the information about the book from the given bookAuthor:
    // "{bookName} == {bookAuthor} - {Has Paid / Not Paid}."
    // • If there is no such author’s book found, throw an Error:
    // "{bookAuthor} is not in the collection.
  }
}
