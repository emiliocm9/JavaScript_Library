const myContainer = document.querySelector('.library-container');
let myLibrary = [];

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
  myLibrary.forEach(function(book){
    myContainer.innerHTML = `<div class="card">
      <div class="card-body">
        <h1 class="card-title">Title:${book.title}</h1>
        <h1 class="card-title">Author:${book.author}</h1>
        <h1 class="card-title">Year:${book.year}</h1>
        <h1 class="card-title">Pages:${book.pages}</h1>
        <h1 class="card-title">Read:${book.read}</h1>
      </div>
    </div>`;
  });
}

addBookToLibrary('otherBook', 'Emilio', 2020, 234, true);
bookDisplay(myLibrary);