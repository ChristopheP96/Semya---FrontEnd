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
      };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    render(){
        const {
            firstName,
            secondFirstName,
            lastName,
            secondLastName,
            dateOfBirth,
            placeOfBirth,
            dateOfWedding,
            placeOfWedding,
            placeOfDeath,
            dateOfDeath,
            profession,
        } = this.state

        return(
            <div className="NewIndividual-form">
                <form onSubmit={this.handleNewIndividualSubmit}>
                <label>Gender:
                        <select name="gender" onChange={this.handleChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder="first name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="secondFirstName"
                        value={secondFirstName}
                        placeholder="second first name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="last name"
                        onChange={this.handleChange}
                    />
                
                    <input
                        type="text"
                        name="secondLastName"
                        value={secondLastName}
                        placeholder="second last name"
                        onChange={this.handleChange}
                    />

                    <label>Date of birth</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={dateOfBirth}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    <input
                        type="text"
                        name="placeOfBirth"
                        value={placeOfBirth}
                        placeholder="place of birth"
                        onChange={this.handleChange}
                    />
                    <label>Date of wedding</label>
                        <input
                            type="date"
                            name="dateOfWedding"
                            value={dateOfWedding}
                            onChange={this.handleChange}
                            className="form-control"
                        />

                    <input
                        type="text"
                        name="placeOfWedding"
                        value={placeOfWedding}
                        placeholder="place of wedding"
                        onChange={this.handleChange}
                    />
                    <label>Date of death</label>
                        <input
                            type="date"
                            name="dateOfDeath"
                            value={dateOfDeath}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    <input
                        type="text"
                        name="placeOfDeath"
                        value={placeOfDeath}
                        placeholder="place of death"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="profession"
                        value={profession}
                        placeholder="profession"
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Create" />
                </form>
            </div>    
        )
    }

}

export default withAuth(NewIndividual);