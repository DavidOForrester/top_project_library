let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book = new Book("Test Title", "Test Author", 1, true);

addBookToLibrary(book);

const tableBody = document.getElementById("table-body");
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

console.log(myLibrary);
