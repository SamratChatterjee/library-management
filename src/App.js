import React, { Component } from "react";
import "./App.css";

import AppRouter from "./components/routing/AppRouter";

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppRouter />
      </div>
    );
  }
}

export default App;
