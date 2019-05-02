import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";

class FindMatches extends Component {
  render() {
    return (
      <div>
        <h1>This is your family tree</h1>
      </div>
    )
  }
}

export default withAuth(FindMatches);
