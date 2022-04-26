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
  // Add table rows with the books info to the table
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    // create table row
    const row = document.createElement("tr");
    // add book info to the table row
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    // add table row to the table
    list.appendChild(row);
  }
}

// Store Class: handle storage

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Add book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // Prevent Default submit
  e.preventDefault();
  // Get form values after submit is pressed
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Instantiate new book object
  const book = new Book(title, author, isbn);
  console.log(book);
  // ADD  Book to UI
  UI.addBookToList(book);
});
// Envent: remove book.
