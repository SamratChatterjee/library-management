import React, { Component } from 'react'
import ApiService from "../../../services/APIService";

class AddBookComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            bookName: "",
            author: "",
            bookCategory: "",
            quantity: "",
            price: "",
            libraryId: "",
            message: "",
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let book = {
            bookName: this.state.bookName, 
            author: this.state.author, 
            bookCategory: this.state.bookCategory, 
            quantity: this.state.quantity, 
            price: this.state.price, 
            libraryId: this.state.libraryId};
        ApiService.addBook(book)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Book</h2>
                <form>
                <div className="form-group">
                    <label>Book Name:</label>
                    <input type="text" placeholder="Book Name" name="bookName" className="form-control" value={this.state.bookName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Author:</label>
                    <input type="text" placeholder="Author" name="author" className="form-control" value={this.state.author} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Book Category:</label>
                    <input type="text" placeholder="Book Category" name="bookCategory" className="form-control" value={this.state.bookCategory} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Quantity:</label>
                    <input type="number" placeholder="Quantity" name="quantity" className="form-control" value={this.state.quantity} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input type="number" placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Library Id:</label>
                    <input type="number" placeholder="Library Id" name="libraryId" className="form-control" value={this.state.libraryId} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddBookComponent;