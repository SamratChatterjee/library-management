import React, { Component } from "react";
import ApiService from "../../../services/APIService";

class ListLibraryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      libraries: [],
      message: null,
    };

    this.showBooks = this.showBooks.bind(this);
    this.reloadLibraryList = this.reloadLibraryList.bind(this);
  }

  componentDidMount() {
    this.reloadLibraryList();
  }

  reloadLibraryList = () => {
    return ApiService.fetchLibraries().then((res) => {
      this.setState({ libraries: res.data});
    });
  };

  showBooks = (id) => {
    window.localStorage.setItem("libraryId", id);
    this.props.history.push("/books");
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Library Details</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Library Id</th>
              <th>Library Name</th>
              <th>Librarian Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.libraries.map((library) => (
              <tr key={library.libraryId}>
                <td>{library.libraryId}</td>
                <td>{library.libraryName}</td>
                <td>{library.librarianName}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => this.showBooks(library.libraryId)}
                  >
                    Show Books
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

export default ListLibraryComponent;
