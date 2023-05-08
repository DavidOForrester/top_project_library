function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function updateTable() {
  const tableBody = document.getElementById("table-body");
  //clears the table
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  //populates the table
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const row = tableBody.insertRow();

    const titleCell = row.insertCell();
    const authorCell = row.insertCell();
    const pagesCell = row.insertCell();
    const readCell = row.insertCell();
    const removeCell = row.insertCell();

    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    pagesCell.innerText = book.pages;
    readCell.innerText = book.read;

    row.setAttribute("data-book-id", i);

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.className = "remove-button"

    removeCell.appendChild(removeButton);
  }
}

function openForm() {
  let form = document.getElementById("book-form");
  form.style.display = "block";
}

function cancelForm() {
  clearForm();
  let form = document.getElementById("book-form");
  form.style.display = "none";
}

function clearForm() {
  var inputs = form.querySelectorAll("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

let myLibrary = [];

const form = document.getElementById("book-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("read");

  let book = new Book(title, author, pages, read);

  addBookToLibrary(book);

  updateTable();

  clearForm();

  form.style.display = "none";

  console.log(myLibrary);
});
