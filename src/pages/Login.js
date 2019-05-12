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
            <img src={icon} alt="icon" ></img>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <input type="submit" value="Login" onClick={this.props.closePopup} />
            <button onClick={this.props.closePopup}>close me</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
