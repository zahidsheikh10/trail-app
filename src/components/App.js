import React, { Component } from "react";
import "./../App.css";
import BrowserRouter from "./routes.js";
import { BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <BrowserRouter />
      </Router>
    );
  }
}
