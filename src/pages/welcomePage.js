import React, { Component } from "react";
import icon from "../images/famicon-bw.png"
import { Link } from "react-router-dom";
import Earth from "../images/white-earth.png";
import welcomeExample from "../images/welcomeExample.png"
import Signup from "../pages/Signup"
import Login from "../pages/Login"

class WelcomePage extends Component {
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
      }
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
    render() {
        return (
            <div className="Welcome-container">
                <div className="signup-section">
                    <ul className="nav justify-content-center">
                        <div className="nav-brand">
                            <li className="">
                                <img className="nav-item-logo" src={icon} alt="logo" />
                            </li>
                            <li className="navbar-brand">
                                <p class="navbar-brand">
                                    Semya
                                </p>
                            </li>
                        </div>
                        <li className="nav-item login">
                            <Link className="nav-item login" to="/login">Login</Link>
                        </li>
                        <li className="nav-item language-globe">
                            <img className="" src={Earth} alt="Logo" width="16px" height="16px"/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled language" href="#">English</a>
                        </li>
                    </ul>
                    
                        <div className="Welcome-title">
                            <h1>Discover your family</h1>
                            <h2>Build your family tree and learn about the lives of your ancestors</h2>
                        </div>  
                        <div className="Welcome-signup">
                            <Signup />
                            <p>or log in if you already have an account</p>
                            <button onClick={this.togglePopup.bind(this)}>show popup</button>
                            {this.state.showPopup ? 
                            <Login
                                text='Close Me'
                                closePopup={this.togglePopup.bind(this)}
                                />
                            : null
                            }
                        </div>
                    
                </div>                    
                <div className="welcome-example">
                    <div className="welcome-example-container">
                        <div className="welcome-example-text-container">
                            <h1 className="welcome-example-title">Unravel your origins</h1>
                            <h2>Get to know where you really come from</h2>
                        </div>
                        <div className="welcome-example-img-container">
                            <img src={welcomeExample} alt="example"/>
                        </div>
                        
                    </div>
                </div>
                <div className="welcome-Documentation">
                    <h2>Here come links to articles and documentation</h2>
                </div>
                <footer>
                    <h3>Semya</h3>
                    
                </footer>
            </div>
    
        );
    }
}

export default WelcomePage;