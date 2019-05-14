import React, { Component } from 'react';
import './Gryffindor.css';

class Gryffindor extends Component {

    render() {

        let gryffins = [];

        for (var i=0; i < this.props.characters.length; i++) {
            if (this.props.characters[i].house === "Gryffindor") {
                gryffins.push(this.props.characters[i]);
            }
        }

       let gryffinCards = gryffins.map((character, index) => {
            return (
            <div className="card-container">
                <div className="houseCard" key={index} >
                <h1 className="houseCard-name">{character.name}</h1>

                <div className="houseCard-data">Role: {character.role}</div>
                <div className="houseCard-data">Species: {character.species}</div>
            </div>
            </div>
            )
            })
            
        return (
            <div>{gryffinCards}</div>

            )
        }
    }   

export default Gryffindor;