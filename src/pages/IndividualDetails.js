import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import treeService from "../lib/treeService";

const id = this.props.id;

class IndividualDetails extends Component {

    state={
        individual:[]
    }
    
    componentDidMount(){
        treeService.getOneIndividual(id)
        .then ( ({data}) =>{
            this.setState( {individual : data})
        })
      }

    render() {
        return (
            <div>
                <h1>{this.state.firstName}</h1>
                 <p>{this.state.gender}</p>
            </div>
        )
    }
}

export default withAuth(IndividualDetails)