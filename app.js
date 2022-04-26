// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Task
class UI {
  static displayBooks() {
    // books array
    const storedBooks = [
      {
        title: "The war of Art",
        author: "Steven Pressfield",
        isbn: "332215",
      },
      {
        title: "The war of Art",
        author: "Steven Pressfield",
        isbn: "332215",
      },
    ];

    const books = storedBooks;
    // loop throught the list of books
    books.forEach((book) => UI.addBookToList(book));
  }
}

// Store Class: handle storage

// Event: Display Books

// Add book

// Envent: remove book.
