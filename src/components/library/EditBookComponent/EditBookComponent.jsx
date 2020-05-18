import React, { Component } from "react";
import ApiService from "../../../services/APIService";

class EditUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: "",
      bookName: "",
      author: "",
      bookCategory: "",
      quantity: "",
      price: "",
      libraryId: ""
    };
    this.updateBook = this.updateBook.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    ApiService.fetchBookById(window.localStorage.getItem("bookId")).then(
      (res) => {
        let book = res.data;
        this.setState({
          bookId: book.bookId,
          bookName: book.bookName,
          author: book.author,
          bookCategory: book.bookCategory,
          quantity: book.quantity,
          price: book.price,
          libraryId: book.libraryId,
        });
      }
    );
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  updateBook = (e) => {
    e.preventDefault();
    const user = {
      bookId: this.state.bookId,
      bookName: this.state.bookName,
      author: this.state.author,
      bookCategory: this.state.bookCategory,
      quantity: this.state.quantity,
      price: this.state.price,
      libraryId: this.state.libraryId,
    };
    ApiService.editBook(user).then((res) => {
      this.setState({ message: "Book updated successfully." });
      this.props.history.push("/books");
    });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Edit Book</h2>
        <form>
          <div className="form-group">
            <label>Book Name:</label>
            <input
              placeholder="Book Name"
              name="bookName"
              className="form-control"
              value={this.state.bookName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Author:</label>
            <input
              placeholder="Author"
              name="author"
              className="form-control"
              value={this.state.author}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Book Category:</label>
            <input
              placeholder="bookCategory"
              name="bookCategory"
              className="form-control"
              value={this.state.bookCategory}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Quantity:</label>
            <input
              type="number"
              placeholder="quantity"
              name="quantity"
              className="form-control"
              value={this.state.quantity}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              placeholder="price"
              name="price"
              className="form-control"
              value={this.state.price}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Library Id:</label>
            <input
              type="number"
              placeholder="libraryId"
              name="libraryId"
              className="form-control"
              value={this.state.libraryId}
              onChange={this.onChange}
            />
          </div>

          <button className="btn btn-success" onClick={this.updateBook}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default EditUserComponent;
