import React, { Component } from 'react';
import axios from 'axios'

class NewIndividual extends Component {
    state = {
        firstName: "",
        secondFirstName: "",
        lastName: "",
        secondLastName: "",
        gender: "",
        dateOfBirth: "",
        placeOfBirth: "",
        dateOfWedding: "",
        placeOfWedding: "",
        isDead: "",
        placeOfDeath: "",
        dateOfDeath: "",
        profession:"",
        
        mother: "",
        father: "",
        son: "",
        daughter: "",
        husband: "",
        wife:"",
    }

    handleNewIndividualSubmit = event => {
        event.preventDefault();
        const { 
            firstName,
            secondFirstName,
            lastName,
            secondLastName,
            gender,
            dateOfBirth,
            placeOfBirth,
            dateOfWedding,
            placeOfWedding,
            isDead,
            placeOfDeath,
            dateOfDeath,
            profession,
            mother,
            father,
            son,
            daughter,
            husband,
            wife
        } = this.state;
        this.props.submitIndividual({ 
            firstName,
            secondFirstName,
            lastName,
            secondLastName,
            gender,
            dateOfBirth,
            placeOfBirth,
            dateOfWedding,
            placeOfWedding,
            isDead,
            placeOfDeath,
            dateOfDeath,
            profession,
            mother,
            father,
            son,
            daughter,
            husband,
            wife 
        });
      };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


  submitIndividual(individual){
    const { firstName, gender } = individual;
    axios.post(process.env.REACT_APP_API_URL + '/mytree/newIndividual', { firstName, gender})
    .then(({ data }) => data);
  }

    render(){
        const {
            firstName,
            secondFirstName,
            lastName,
            secondLastName,
            gender,
            dateOfBirth,
            placeOfBirth,
            dateOfWedding,
            placeOfWedding,
            isDead,
            placeOfDeath,
            dateOfDeath,
            profession,
            mother,
            father,
            son,
            daughter,
            husband,
            wife 
        } = this.state

        return(
            <div className="NewIndividual-form">
                <form onSubmit={this.handleNewIndividualSubmit}>
                    <label> </label>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Create" />
                </form>
            </div>    
        )
    }

}

export default NewIndividual;