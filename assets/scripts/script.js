let myLibrary = [];
const myContainer = document.querySelector('.library-container');

function myBook(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function uploadBook() {
  let savebutton = document.querySelector("#add-button")

  savebutton.addEventListener("click", function() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let year = document.querySelector("#year").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    addBookToLibrary(title, author, year, pages, read);
  });
}

function addBookToLibrary(title, author, year, pages, read) {
  let userBook = new myBook(title, author, year, pages, read);
  myLibrary.push(userBook);
  bookDisplay(userBook);
}

function bookDisplay(book) {
  let bookIndex = myLibrary.indexOf(book);

  let myCard = document.createElement("div");
  myCard.className = "card w-50";
  myCard.setAttribute("data-index", `${bookIndex}`);
  myCard.innerHTML = `
    <div class="card-body">
      <h1 class="card-title">Title:${book.title}</h1>
      <h1 class="card-title">Author:${book.author}</h1>
      <h1 class="card-title">Year:${book.year}</h1>
      <h1 class="card-title">Pages:${book.pages}</h1>
      <h1 class="card-title" id="read-title">Read:${book.read}</h1>
    </div>
    <label for="read-check">
      <input type="checkbox" id="read-check"/><p>Read</p>
    </label>
  <button id="delete" class="remove">Delete</button>`;

  
  deleteBook(myCard, bookIndex);

  myContainer.appendChild(myCard);
  toggle(book);
}

function deleteBook(myCard, bookIndex) {
  myCard.querySelector("#delete").addEventListener("click", function() {
    let element = document.querySelector(`[data-index="${bookIndex}"]`);
    myContainer.removeChild(element);
    delete myLibrary(bookIndex);
  });
}

function toggle(book) {
  const checkBook = document.querySelector("#read-check");
  checkBook.addEventListener("click", function(){
    if (book.read == true) {
      book.read = false;
      toggleStatus(book);
    }
    else {
      book.read = true;
      toggleStatus(book);
    }
  });
}

function toggleStatus(book) {
  const readTitle = document.querySelector("#read-title");
  if (book.read) {
    readTitle.textContent = 'Read: true';
  }
  else {
    readTitle.textContent = 'Read: false';
  }
}

uploadBook();
addBookToLibrary('otherBook', 'Emilio', 2020, 234, true);
addBookToLibrary('firstBook', 'Jamez', 1987, 536, false);