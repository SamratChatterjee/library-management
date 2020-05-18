import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListLibraryComponent from "../library/ListLibraryComponent/ListLibraryComponent";
import AddBookComponent from "../library/AddBookComponent/AddBookComponent";
import EditBookComponent from "../library/EditBookComponent/EditBookComponent";
import ListBooksComponent from "../library/ListBooksComponent/ListBooksComponent"

const AppRouter = () => {
  return (
    <div>
      <Router>
        <div className="col-md-6">
          <h1 className="text-center" style={style}>
            Library Management
          </h1>
          <Switch>
         <Route path="/" exact component={ListLibraryComponent} />
            <Route path="/books" component={ListBooksComponent} />
            <Route path="/edit/book" component={EditBookComponent} />
            <Route path="/add/book" component={AddBookComponent} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

const style = {
  color: "red",
  margin: "10px",
};

export default AppRouter;
