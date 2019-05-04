import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Earth from "../images/earth.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div className="Navbar container">
        <div className="Navbar-firstline">
          <div className="name-container">
            <p className="User-Welcome">{user.username}'s Web Site</p>
          </div>
          <div className="language-container">
            <div className="language-icon-container">
              <img className="language-icon" src={Earth} alt="Logo" width="16px" height="16px"/>
            </div>
            <div className="language-name-container">
              <p className="language-name">English</p>
            </div>
          </div>
          <div className="buttons-container">
            <Link to="/logout">Login</Link>
          </div>
        </div>
        <div className="Navbar folders">
          <div className="logo">
          </div>
          <div className="folders">
          </div>
        </div>
        <div className="Navbar whereamI">
        </div>       
      </div>
    );
  }
}

export default withAuth(Navbar);
