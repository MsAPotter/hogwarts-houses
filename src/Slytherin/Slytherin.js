import React, { Component } from 'react';
import './Slytherin';

class Slytherin extends Component {
    render() {

        let slys = [];

        for (var i=0; i < this.props.characters.length; i++) {
            if (this.props.characters[i].house === "Slytherin") {
                slys.push(this.props.characters[i]);
            }
        }

       let slyCards = slys.map((character, index) => {
            return (
                <div className="houseCard" key={index} >
                    <h1 className="houseCard-name">{character.name}</h1>

                    <div className="houseCard-data">Role: {character.role}</div>
                    <div className="houseCard-data">Species: {character.species}</div>
                </div>
            )
            })
            
        return (
            <div className="card-container">{slyCards}</div>

            )
        }
}

export default Slytherin;