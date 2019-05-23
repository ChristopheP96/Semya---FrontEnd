import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import icon from "../images/famicon.png"

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-container text-center">
        <div className="popup_inner">
          <button type="button" className="close" aria-label="Close" onClick={this.props.closePopup}>
           <span aria-hidden="true">&times;</span>
          </button>
            <img className="popup-logo mb-4" src={icon} alt="icon" />
            <h1 className="h1 mb-1 font-weight-normal title-login">Welcome to Semya</h1>
            <h3 className="h3 mb-3 font-weight-normal title-login">Enter your account</h3>
            <div className="login-credentials">
              <form className="form-signin" onSubmit={this.handleFormSubmit}>
                <label className="sr-only label-login-email">email:</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    className="form-control login-email"
                  />
                <label className="sr-only label-login-email">Password:</label>
                  <input
                    className="form-control login-password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                <input className="btn btn-lg btn-primary btn-block login-button" type="submit" value="Login" />
              </form>
            </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
