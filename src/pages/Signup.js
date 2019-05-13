import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Login from "../pages/Login";

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
          <a className="nav-item login" onClick={this.togglePopup.bind(this)} href={this.togglePopup.bind(this)}>Login</a>
                            {this.state.showPopup ? 
                            <Login
                                text='Close Me'
                                closePopup={this.togglePopup.bind(this)}
                                />
                            : null
                            }
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
