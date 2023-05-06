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
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  for (let book of myLibrary) {
    const row = tableBody.insertRow();
    const titleCell = row.insertCell();
    const authorCell = row.insertCell();
    const pagesCell = row.insertCell();
    const readCell = row.insertCell();

    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    pagesCell.innerText = book.pages;
    readCell.innerText = book.read;
  }
}

function openForm() {
  let form = document.getElementById("book-form");
  form.style.display = "block";
}

//Cancel button here
function cancelForm() {}

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

  var inputs = form.querySelectorAll("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }

  form.style.display = "none";

  console.log(myLibrary);
});
