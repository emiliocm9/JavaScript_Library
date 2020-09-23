const myLibrary = [];
const myContainer = document.querySelector('.library-container');

function MyBook(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function deleteBook(myCard, bookIndex) {
  myCard.querySelector('#delete').addEventListener('click', () => {
    const element = document.querySelector(`[data-index="${bookIndex}"]`);
    myContainer.removeChild(element);
    delete myLibrary(bookIndex);
  });
}

function bookDisplay(book) {
  const bookIndex = myLibrary.indexOf(book);

  const myCard = document.createElement('div');
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

  function nameToggle(readText) {
    if (book.read) {
      readText.textContent = 'Read: true';
    } else {
      readText.textContent = 'Read: false';
    }
  }

  function toggleCheckBox() {
    const card = myCard.querySelector('.card-body');
    if (book.read) {
      checkBook.checked = true;
      card.classList.remove('bg-info');
      card.classList.add('bg-success');
      nameToggle(readText);
    } else {
      checkBook.checked = false;
      card.classList.remove('bg-success');
      card.classList.add('bg-info');
      nameToggle(readText);
    }
  }

  toggleCheckBox();
  nameToggle(readText);
  checkBook.addEventListener('change', () => {
    if (book.read) {
      book.read = false;
      toggleCheckBox();
    } else {
      book.read = true;
      toggleCheckBox();
    }
  });

  myContainer.appendChild(myCard);
}

function addBookToLibrary(title, author, year, pages, read) {
  const userBook = new MyBook(title, author, year, pages, read);
  myLibrary.push(userBook);
  bookDisplay(userBook);
}

function uploadBook() {
  const savebutton = document.querySelector('#add-button');

  savebutton.addEventListener('click', () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const year = document.querySelector('#year').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    // Validations
    const errorTitle = document.querySelector('#error-title');
    const errorAuthor = document.querySelector('#error-author');
    const errorYear = document.querySelector('#error-year');
    const errorPage = document.querySelector('#error-page');
    const dataDismiss = document.querySelector('#add-button');
    if (title === '' || title.length < 5 || title.length > 300) {
      errorTitle.className = 'd-block text-danger';
    } else if (author === '' || author.length < 3 || author.length > 20) {
      errorAuthor.className = 'd-block text-danger';
    } else if (year === '' || year.length !== 4 ) {
      errorYear.className = 'd-block text-danger';
    } else if (pages === '' || pages < 1) {
      errorPage.className = 'd-block text-danger';
    } else {
      addBookToLibrary(title, author, year, pages, read);
      dataDismiss.setAttribute('data-dismiss', 'modal');
      alert('Create a new book?');
    }
  });
}

uploadBook();
addBookToLibrary('otherBook', 'Emilio', 2020, 234, true);
addBookToLibrary('firstBook', 'Jamez', 1987, 536, false);
