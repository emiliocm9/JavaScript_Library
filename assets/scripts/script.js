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

addBookToLibrary('otherBook', 'Emilio', 2020, 234, true);