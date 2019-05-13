import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Earth from "../images/earth.png";
import { Link } from "react-router-dom";
import DummyParticles from "../components/dummyParticles"

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <>
            <div className="">
                  <div className="Navbar-firstline">
                    <div className="name-container">
                      <a className="">Welcome to {user.username}'s webpage</a>
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
                      <a className="nav-link nav-logout" onClick={() => logout()}>Logout</a>
                    </div>
                  </div>

                  <div className="-nav-SecondLine">
                    <div className="nav-zone">
                     
                      <p>Semya</p>
                        <ul className="nav nav-tabs folders">
                          <li className="nav-item">
                            <p className="nav-link active"><Link to="/home">Home</Link></p>
                            </li>
                          <li className="nav-item">
                            <p className="nav-link active"><Link to="/mytree">Your family tree</Link></p>
                            </li>
                          <li className="nav-item">
                            <p className="nav-link active"><Link to="/mytree">Documentation</Link></p>
                            </li>
                          <li className="nav-item">
                            <p className="nav-link active"><Link to="/home/myprofile"> Your profile</Link></p>
                            </li>
                        </ul>
                    </div>
                   
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
