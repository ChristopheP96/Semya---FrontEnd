import React, { Component } from "react";
import { Link } from 'react-router-dom';

class IndividualItem extends Component {
  
  render() {
    return (
      <Link 
      className='tree-cell IndividualItem-button'
      to="/mytree/{this.props.id}"
       >
          <h1>{this.props.firstName}</h1>
      </Link>
    )
  }

}

export default IndividualItem; 