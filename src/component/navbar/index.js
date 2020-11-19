import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./navbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Navbar extends Component {
  
  
  render() {
    return (
      <div className="navbar-container">
        <Link to="/">
          <a>Home</a>
        </Link>
      </div>
      // <nav>
      //     helo
      // </nav>
      // <div className="navbar-container">
      //     This is navbar
      // </div>
    );
  }
}

export default Navbar;
