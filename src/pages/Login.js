import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import icon from "../images/famicon.png"

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="login-container text-center">
        <div className="popup_inner">
          <form className="form-signin" onSubmit={this.handleFormSubmit}>
            <img className="popup-logo mb-4" src={icon} alt="icon" />
            <h1 className="h1 mb-1 font-weight-normal">Welcome to Semya</h1>
            <h3 className="h3 mb-3 font-weight-normal">Enter your account</h3>
            <label className="sr-only">Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              className="form-control"
            />
            <label className="sr-only">Password:</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <input className="btn btn-lg btn-primary btn-block" type="submit" value="Login" />
            <button onClick={this.props.closePopup}>close me</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
