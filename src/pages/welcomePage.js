import React, { Component } from "react";
import icon from "../images/famicon.png"
import { Link } from "react-router-dom";
import Earth from "../images/earth.png";
import welcomeExample from "../images/welcomeExample.png"

class WelcomePage extends Component {
    render() {
        return (
            <div className="Welcome container">
                <div className="signup-section">
                    <header className="">
                        <div className="Brand">
                            <div className="Brand-Icon">
                                <img src={icon} alt="logo" width="35px" height="35px" />
                            </div>
                            <div className="Brand-Name">
                                <h1 className="navbar-brand">Semya</h1>
                            </div>
                        </div>
                        <div className="Welcome-buttons-container">
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="welcome-language-container">
                            <div className="welcome-language-icon-container">
                                <img className="welcome-language-icon" src={Earth} alt="Logo" width="16px" height="16px"/>
                            </div>
                            <div className="welcome-language-name-container">
                                <p className="welcome-language-name-container">English</p>
                            </div>
                        </div>
                    </header>
                </div>
                
                <div className="Welcome-title">
                    <h1>Discover your family</h1>
                    <h2>Build your family tree and learn about the lives of your ancestors</h2>
                </div>
                
                <div className="Welcome-signup">
                    <Link to="/signup">Signup</Link>
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