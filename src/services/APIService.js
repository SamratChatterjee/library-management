import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/learning";

class APIService {

  fetchLibraries() {
    return axios.get(USER_API_BASE_URL + "/libraries");
  }

  fetchBooksByLibraryId(libraryId) {
    return axios.get(USER_API_BASE_URL + "/book/library/" + libraryId);
  }

  fetchBookById(bookId) {
    return axios.get(USER_API_BASE_URL + "/book/" + bookId);
  }

  editBook(book) {
    return axios.put(USER_API_BASE_URL + "/book/update" , book);
  }

  addBook(book) {
    return axios.post(USER_API_BASE_URL + "/book/add", book);
  }
}

export default new APIService();
