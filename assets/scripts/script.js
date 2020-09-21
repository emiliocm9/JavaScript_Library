let myLibrary = [];
const myContainer = document.querySelector('.library-container');

function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, year, pages, read) {
  let userBook = new Book(title, author, year, pages, read);
  myLibrary.push(userBook);
  console.log(myLibrary);
}

function bookDisplay(myLibrary) {
  myLibrary.forEach(function(book) {
    let bookIndex = myLibrary.indexOf(book);
    myContainer.setAttribute("data-index", `${bookIndex}`);
    myContainer.innerHTML = `<div class="card">
      <div class="card-body">
        <h1 class="card-title">Title:${book.title}</h1>
        <h1 class="card-title">Author:${book.author}</h1>
        <h1 class="card-title">Year:${book.year}</h1>
        <h1 class="card-title">Pages:${book.pages}</h1>
        <h1 class="card-title">Read:${book.read}</h1>
      </div>
    </div>
    <button id="delete" class="remove">Delete</button>`;
    deleteBook(book, bookIndex);
  });
}

function deleteBook(book, bookIndex) {
  myContainer.querySelector('#delete').addEventListener("click", function(){
    // let element = document.querySelector(`[data-index="${bookIndex}"]`);
    myContainer.removeChild(book);
    delete myLibrary(bookIndex);
  });

}


addBookToLibrary('otherBook', 'Emilio', 2020, 234, true);
addBookToLibrary('firstBook', 'Jamez', 1987, 536, false);
bookDisplay(myLibrary);