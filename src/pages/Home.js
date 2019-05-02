import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.username}, this is the home page</h1>
      </div>
    );
  }
}

export default withAuth(Home);
