import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import treeService from "../lib/treeService";
import NewIndividual from "../components/NewIndividual";
import TreeComponent from "../components/TreeComponent";

const myTreeData = [
  {
    name: "top level",
    children: [
      {
        name: "me",
        children: [
          {
            name: 'My father',
            attributes: {
              keyA: 'val A',
              keyB: 'val B',
              keyC: 'val C',
            }, children: [
              {
                name: 'My Grand-father',
              },
              {
                name:'',
              },
              {
                name: 'My Grand-mother',
              },
            ]
          },
          {
            name:'',
            id:5,
          },
          {
            name: 'My mother',
          },
        ]
      },
      {
        name:"wife",
      }
    ]
  },
];

class MyTree extends Component {
  state={
    newIndividual:"",
    fetchedIndividuals:[]
  }
  
  componentDidMount() {
    treeService.getIndividuals()
      .then( ({data}) => {
      this.setState( {fetchedIndividuals: data})
      console.log(this.state.fetchedIndividuals)
      })
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
            <TreeComponent myTreeData = { myTreeData }/>
           </div>     
      </div>
    )
  }
}

export default withAuth(MyTree);
