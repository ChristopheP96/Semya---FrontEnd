import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import treeService from "../lib/treeService";
import NewIndividual from "../pages/NewIndividual";
import IndividualItem from "../components/IndividualItem";

class MyTree extends Component {
  state={
    newIndividual:"",
    individuals: [],
  }
  
  componentDidMount() {
    treeService.getIndividuals()
      .then( ({data}) => {
      this.setState( {individuals: data})
      })
  }
 
  renderTree() {
    return (
      this.state.individuals.length && this.state.individuals.map((individual, index) => 
        (
          <IndividualItem key={index} {...individual}/>
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
          {this.changeMyTreeData}
          
          </div>
          <NewIndividual />
           <div className="orgchart" id="orgchart">
            { this.renderTree() }
           </div>     
      </div>
    )
  }
}

export default withAuth(MyTree);
