import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>This is your profile</h1>
      </div>
    )
  }
}

export default withAuth(Profile);
