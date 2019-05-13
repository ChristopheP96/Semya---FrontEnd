import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="Navbar-whereamI">
          <h1>Profile</h1>
        </div>
      </div>
    )
  }
}

export default withAuth(Profile);
