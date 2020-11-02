
//this class carry data through this functions at server

class BookService {

    constructor() {
      this.URI =  `/api/books`;
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const books = await response.json(); //convert to json file
        return books;
    }

    async postBook(book) {
      const response = await fetch(this.URI, {
        method: 'POST',
        body: book
      });
      const data = await response.json();
    }

    async deleteBook(bookId) {
        const response = await fetch(`${this.URI}/${bookId}`, {
          headers: { // use header bc just send data (bookId) unlike postbook that sends a complete form
              'Content-type': 'application/json'// type of data
          },
          method: 'DELETE'
      });
      const data = await response.json();
      console.log(data);
    }
}

export default BookService;
