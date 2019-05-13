import React, { Component } from "react";
import icon from "../images/famicon-bw.png";
import Earth from "../images/white-earth.png";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import coupleMan from "../images/coupleHomme.png";
import coupleWoman from "../images/coupleFemme.png";
import MomWoman from "../images/mereFemme.png";
import fatherMan from "../images/pereHomme.png";
import parentsCouple from "../images/parentsCouple.png";
import smallLink from "../images/laisongdparents.png"
import bigLink from "../images/laisoncouple.png"

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
                                <p className="navbar-brand">
                                    Semya
                                </p>
                            </li>
                        </div>
                        <li className="nav-item login">
                            <a className="nav-item login" onClick={this.togglePopup.bind(this)} href={this.togglePopup.bind(this)}>Login</a>
                            {this.state.showPopup ? 
                            <Login
                                text='Close Me'
                                closePopup={this.togglePopup.bind(this)}
                                />
                            : null
                            }
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
                        </div>
                    
                </div>                    
                <div className="welcome-example">
                    <div className="welcome-example-container">
                        <div className="welcome-example-text-container">
                            <h1 className="welcome-example-title">Unravel your origins</h1>
                            <h2>Your past begins with your family tree and it's easy to build one on Semya. Add names, dates, photos and stories and share with your family.</h2>
                        </div>
                        <div className="welcome-example-img-container" >
                            <div className="parents-container">
                                <img src={fatherMan} className="gdParents" alt="grand parents" data-aos="fade-up"/>
                                <img src={smallLink} alt="link" className="link-gdParents" data-aos="fade-up" data-aos-offset="400"/>
                                <img src={parentsCouple} className="gdParents" alt="grand parents" data-aos="fade-up" />
                                <img src={smallLink} alt="link" className="link-gdParents" data-aos="fade-up" data-aos-offset="400"/>
                                <img src={MomWoman} className="gdParents" alt="grand parents" data-aos="fade-up" />
                            </div>
                            <div className="couple-container">
                                <div className="couple-div-man" >
                                    <img src={coupleMan} className="couple" alt="couple" data-aos="fade-up" data-aos-offset="600" />
                                </div>
                                <img src={bigLink} alt="link" className="link-couple" data-aos="fade-up" data-aos-offset="800"/>
                                <div className="div-woman">
                                    <img src={coupleWoman} className="couple" alt="couple" data-aos="fade-up" data-aos-offset="600"/>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="800">
                        <a type="button" class="btn btn-secondary btn-lg active" href={<Signup />} >Start your tree</a>
                            </div>
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