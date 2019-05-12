import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.signup({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="signin-page">
        <h4>Start your genealogical tree straight away</h4>
        <p>homme femme</p>
        <form onSubmit={this.handleFormSubmit}>
          <label>Fist Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            className="form-control"
          />
          <p>Email adress</p>
          <p>Your Birthday</p>
          <label>Create a password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="form-control"
          />
          <p>Mon père : prénom nom de famille</p>
          <p>Ma mère : prénom, nom de famille</p>
          <input type="submit" value="Start my tree" className="btn btn-lg btn-primary btn-block"/>
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
