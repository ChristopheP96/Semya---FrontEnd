import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import TreeProvider from "../lib/TreeProvider"
import NewIndividual from "../components/NewIndividual"

class MyTree extends Component {

  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <div>Loading Tree</div>
    ):(
      <div>
        <div className="Navbar-whereamI">
          <h1>{this.props.user.username}'s family tree</h1>
        </div>
          <div className="container">
          <TreeProvider />
          </div>
          <NewIndividual />        
      </div>
    );
  }
}

export default withAuth(MyTree);
