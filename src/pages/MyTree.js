import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import treeService from "../lib/treeService";
import NewIndividual from "../pages/NewIndividual";
import IndividualItem from "../components/IndividualItem";

class MyTree extends Component {

  state={
    newIndividual:"",
    individuals: [],
    individual: []
  }
  
  componentDidMount() {
    treeService.getIndividuals()
      .then( ({data}) => {
      this.setState( {individuals: data})
      })
  }
 
  renderTree() {
    return (
      this.state.individuals.length 
      && this.state.individuals.map((individual, key) => 
        (
          <li>
            <IndividualItem key={key} {...individual}/>
          </li>
        )
      )
    )
  }


  render() {
    return (
      <div>
        <div className="Navbar-whereamI">
          <h1>{this.props.user.firstName}'s family tree</h1>
        </div>
          <div className="container">
          </div>
          <NewIndividual />
           <div className="orgchart" id="orgchart">
            <ul>
            { this.renderTree() }
            </ul>
           </div>     
      </div>
    )
  }
}

export default withAuth(MyTree);
