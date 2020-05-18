import React, { Component } from "react";
import ApiService from "../../../services/APIService";

class ListBooksComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      message: null,
    };

    this.editBook = this.editBook.bind(this);
    this.addBook = this.addBook.bind(this);
    this.reloadBooksList = this.reloadBooksList.bind(this);
  }

  componentDidMount() {
    this.reloadBooksList();
  }

  reloadBooksList = () => {
    return ApiService.fetchBooksByLibraryId(window.localStorage.getItem("libraryId")).then((res) => {
      this.setState({ books: res.data});
    });
  };

  editBook = (bookId) => {
    window.localStorage.setItem("bookId", bookId);
    this.props.history.push("/edit/book");
  };

  addBook = () => {
    window.localStorage.removeItem("bookId");
    this.props.history.push("add/book");
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Library Details</h2>
        <button className="btn btn-success" onClick={() => this.addBook()}>
          Add Book
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Book Id</th>
              <th>Name</th>
              <th>Author</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book) => (
              <tr key={book.bookId}>
                <td>{book.bookId}</td>
                <td>{book.bookName}</td>
                <td>{book.author}</td>
                <td>{book.bookCategory}</td>
                <td>{book.quantity}</td>
                <td>{book.price}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => this.editBook(book.bookId)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListBooksComponent;
