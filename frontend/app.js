import "./styles/app.css";

import UI from './UI';

//import BookService from './services/BookService';

document.addEventListener('DOMContentLoaded', () => { //One time the navegator print the UI bring data from server
  const ui = new UI();
  ui.renderBooks();
});

document.getElementById('book-form').addEventListener('submit', e => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  const image = document.getElementById('image').files;

  const formData = new FormData(); //JS default form
  formData.append('image', image[0]);
  formData.append('title', title);
  formData.append('author', author);
  formData.append('isbn', isbn);

  const ui = new UI();
  ui.addNewBook(formData);
  ui.renderMessage('New Book added', 'success', 3000);

  e.preventDefault();
});

document.getElementById('books-cards').addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
      const ui = new UI();
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMessage('Book removed', 'danger', 2000);
    }
    e.preventDefault();
});
