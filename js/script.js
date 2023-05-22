class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  addBookToLibrary(book) {
    myLibrary.push(book);
  }

  removeBook(i) {
    myLibrary.splice(i, 1);
  }
}

Book.prototype.readCheckbox = function (i, state) {
  if (state) {
    myLibrary[i]["read"] = "on";
  } else {
    myLibrary[i]["read"] = null;
  }
};

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

    //read checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "read-checkbox-" + i;
    if (book.read == "on") {
      checkbox.checked = true;
    }
    readCell.appendChild(checkbox);

    //event listener for the read checkbox
    const readCheckbox = document.getElementById("read-checkbox-" + i);
    readCheckbox.addEventListener("change", (event) => {
      book.readCheckbox(i, event.target.checked);
    });

    //adds the remove button to the table
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.id = "remove-button-" + i;
    removeCell.appendChild(removeButton);

    //event listener for the remove button
    const removeBookButton = document.getElementById("remove-button-" + i);
    removeBookButton.addEventListener("click", () => {
      book.removeBook(i);
      updateTable();
    });
  }
}

function openForm() {
  let form = document.getElementById("form-modal");
  form.style.display = "block";
}

function cancelForm() {
  clearForm();
  let form = document.getElementById("form-modal");
  form.style.display = "none";
}

function clearForm() {
  var inputs = form.querySelectorAll("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

// Global code
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

  book.addBookToLibrary(book);

  updateTable();

  cancelForm();
});
