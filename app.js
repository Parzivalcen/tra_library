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
    const storedBooks = [];

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

  // Show Alert
  static showAlert(message, className) {
    const div = document.createElement("div"); // message div
    div.className = `alert alert-${className}`;
    div.innerHTML = `${message}`;
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    // Dissapearing time for alert
    // setTimeOut takes two arguments
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  // Clear form
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  // Delete Books
  static deleteBooks(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
}

// Store Class: handle storage
class Store {
  static getBooks() {
    let books;
    /*
    Check if there is an item call books in LS. 
    IF there is not, we create one.
    */
  }

  static addBook(book) {}

  static removeBook(isbn) {}
}

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

  // Validate, if one of the fields are empty
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill all the Fields", "danger");
  } else {
    // Instantiate new book object
    const book = new Book(title, author, isbn);
    console.log(book);
    // ADD  Book to UI
    UI.addBookToList(book);
    UI.showAlert("Book added Correctly", "success");
    // Clear Fields
    UI.clearFields();
  }
});
// Envent: remove book.
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBooks(e.target);
  UI.showAlert("Book Deleted", "info");
});
