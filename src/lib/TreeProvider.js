import React, { Component } from "react";
import IndividualItem from "../components/IndividualItem"
import axios from "axios";

const { Consumer } = React.createContext();

export { Consumer };

class TreeProvider extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
       individuals: [],
       isLoading: true
   }
  }
   
  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + '/mytree', { withCredentials: true })
      .then(response => {
        this.setState({
          individuals: response.data,
          isLoading: false
        })
      })
      .catch(error => console.log(error))
  };
  
  renderTree() {
    return (
      this.state.individuals.length && this.state.individuals.map((individual, index) => 
        (
          <IndividualItem key={index} {...individual}/>
        )
      )
    )
  }

  AddNewIndividual(){
    
  }

    render() {
      return this.state.isLoading ? (
        <h2>Loading tree</h2>
      ) : (
        this.renderTree()
      )
    }
};

export default TreeProvider;