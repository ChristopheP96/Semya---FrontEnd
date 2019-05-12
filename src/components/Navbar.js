import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Earth from "../images/earth.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <>
            <div className="Navbar container">
                  <div className="Navbar-firstline">
                    <div className="name-container">
                      <a className="navbar-brand">Welcome to {user.username}'s webpage</a>
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
                      <a className="nav-link" onClick={() => logout()} >Logout</a>
                    </div>
                  </div>

                  <div className="Navbar-folders">
                    <div className="logo">
                    </div>
                    <div className="folders">
                      <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/mytree">Your family tree</Link></li>
                        <li><Link to="/mytree">Documentation</Link></li>
                        <li><Link to="/home/myprofile"> Your profile</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="Navbar-whereamI">
                  </div>
            </div>
          </>

        ) : (
          <>
            <div></div>
          </>
        )}
      </div>
    )
  }
}

export default withAuth(Navbar);
