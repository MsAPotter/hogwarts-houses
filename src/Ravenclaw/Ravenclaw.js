import React, { Component } from 'react';
import './Ravenclaw.css';

class Ravenclaw extends Component {
    render() {

        let ravens = [];

        for (var i=0; i < this.props.characters.length; i++) {
            if (this.props.characters[i].house === "Ravenclaw") {
                ravens.push(this.props.characters[i]);
            }
        }

       let ravenCards = ravens.map((character, index) => {
            return (
                <div className="houseCard" key={index} >
                    <h1 className="houseCard-name">{character.name}</h1>

                    <div className="houseCard-data">Role: {character.role}</div>
                    <div className="houseCard-data">Species: {character.species}</div>
                </div>
            )
            })
            
        return (
            <div className="card-container">{ravenCards}</div>

            )
        }
}

export default Ravenclaw;