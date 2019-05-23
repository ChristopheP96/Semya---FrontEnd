import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Login from "../pages/Login";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    firstName: "", 
    lastName:"",
    gender: "", 
    dateOfBirth: "", 
    isDead:"",
    individualIsUser:""
  };

  handleFormSubmitSignUp = event => {
    event.preventDefault();
    const { 
      email, 
      password,
      firstName, 
      gender, 
      dateOfBirth,
      } = this.state;
    this.props.signup({ 
      email,
      password,
      firstName, 
      gender, 
      dateOfBirth, 
      isDead: "no",
      individualIsUser:"yes"
    });
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
    const { 
      email, 
      password, 
      firstName, 
      gender, 
      dateOfBirth
      } = this.state;
    return (
      <div className="signin-page">
        <h4>Start your genealogical tree straight away</h4>
                
        <form onSubmit={this.handleFormSubmitSignUp}>
          
        <label>gender</label>
          <input
            type="text"
            name="gender"
            placeholder="gender"
            value={gender}
            onChange={this.handleChange}
            className="form-control"
          />
          
          
          <label>email</label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={email}
            onChange={this.handleChange}
            className="form-control"
          />
          
          <label>Your birthday</label>
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={this.handleChange}
            className="form-control"
          />

          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            placeholder="Your First Name"
            className="form-control"
          />

          <label>Create a password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter a password"
            onChange={this.handleChange}
            className="form-control"
          />
            <input type="submit" value="Start my tree" className="btn btn-lg btn-primary btn-block"/>
        </form>      
        
        <p>
          Already have account?
          <a className="nav-item login" 
            onClick={this.togglePopup.bind(this)} 
            href={this.togglePopup.bind(this)}>Login</a>
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
