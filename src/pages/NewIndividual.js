import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import treeService from "../lib/treeService"

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
        wife: "",
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
        treeService.createIndividual({ 
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
        console.log(this.state)
      };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(name)
    }


    render(){
        const {
            firstName,
            gender,
            secondFirstName,
            lastName,
            secondLastName,
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
                    <input
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={this.handleChange}
                    />
                    <input type="submit" value="Create" />
                </form>
            </div>    
        )
    }

}

export default withAuth(NewIndividual);