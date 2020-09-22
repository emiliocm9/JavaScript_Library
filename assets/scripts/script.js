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
      <h1 class="card-title border border-info" class="read-title">Read:${book.read}</h1>
    </div>
    <label for="read-check">
      <input type="checkbox" id="read-check"/><p>Read</p>
    </label>
  <button id="delete" class="remove">Delete</button>`;

  deleteBook(myCard, bookIndex);

  const checkBook = myCard.querySelector("#read-check");
  // toggleStatus(myCard, book);

  toggle(checkBook, myCard, book);

  function toggleStatus(myCard, book) {
    const readTitle = myCard.querySelector(".read-title");
    if (book.read) {
      readTitle.textContent = 'Read: true';
    }
    else {
      readTitle.textContent = 'Read: false';
    }
  }

  myContainer.appendChild(myCard);
}

function deleteBook(myCard, bookIndex) {
  myCard.querySelector("#delete").addEventListener("click", function() {
    let element = document.querySelector(`[data-index="${bookIndex}"]`);
    myContainer.removeChild(element);
    delete myLibrary(bookIndex);
  });
}

function toggle(checkBook, myCard, book) {
  checkBook.addEventListener("change", function(){
    if (book.read) {
      book.read = false;
      toggleStatus();
    }
    else {
      book.read = true;
      toggleStatus();
    }
  });
}

uploadBook();
addBookToLibrary('otherBook', 'Emilio', 2020, 234, true);
addBookToLibrary('firstBook', 'Jamez', 1987, 536, false);
