const myLibrary = [];
const myContainer = document.querySelector('.library-container');

function myBook(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function toggleCheckBox() {
  const card = myCard.querySelector('.card-body');
  if (book.read) {
    checkBook.checked = true;
    card.classList.remove('bg-info');
    card.classList.add('bg-success');
    nameToggle(readText)
  } else {
    checkBook.checked = false;
    card.classList.remove('bg-success');
    card.classList.add('bg-info');
    nameToggle(readText)
  }
}

function nameToggle(readText) {
  if (book.read) {
    readText.textContent = 'Read: true';
  } else {
    readText.textContent = 'Read: false';
  }
}


function uploadBook() {
  const savebutton = document.querySelector('#add-button')

  savebutton.addEventListener('click', function() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const year = document.querySelector('#year').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

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

  let myCard = document.createElement('div');
  myCard.className = 'card w-50 p-4';
  myCard.setAttribute('data-index', `${bookIndex}`);
  myCard.innerHTML = `
    <div class="card-body bg-info">
      <h2 class="card-title"><span class="font-weight-bold">Title: </span>${book.title}</h2>
      <h3 class="card-title"><span class="font-weight-bold">Author: </span>${book.author}</h3>
      <h4 class="card-title"><span class="font-weight-bold">Year: </span>${book.year}</h4>
      <h5 class="card-title"><span class="font-weight-bold">Pages: </span>${book.pages}</h5>
      <h6 class="card-title read-title"></h6>
    </div>
    <label for="read-check" class="d-flex align-items-center  p-3">
      <p class="font-weight-bold">Read</p>
      <input type="checkbox" class="read-check ml-2 mb-3"/>
    </label>
  <button id="delete" class="remove w-25 bg-danger border-0 rounded mx-auto py-1">Delete</button>`;

  deleteBook(myCard, bookIndex);

  const checkBook = myCard.querySelector('.read-check');
  const readText = myCard.querySelector('.read-title');
  toggleCheckBox();
  nameToggle(readText);

  checkBook.addEventListener('change', function() {
    if (book.read) {
      book.read = false;
      toggleCheckBox();
    }
    else {
      book.read = true;
      toggleCheckBox();
    }
  });

  myContainer.appendChild(myCard);
}

function deleteBook(myCard, bookIndex) {
  myCard.querySelector('#delete').addEventListener('click', function() {
    let element = document.querySelector(`[data-index="${bookIndex}"]`);
    myContainer.removeChild(element);
    delete myLibrary(bookIndex);
  });
}

uploadBook();
addBookToLibrary('otherBook', 'Emilio', 2020, 234, true);
addBookToLibrary('firstBook', 'Jamez', 1987, 536, false);
