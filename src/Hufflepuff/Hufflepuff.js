import React, { Component } from 'react';
import './Hufflepuff.css';

class Hufflepuff extends Component {
    render() {

        let huffles = [];

        for (var i=0; i < this.props.characters.length; i++) {
            if (this.props.characters[i].house === "Hufflepuff") {
                huffles.push(this.props.characters[i]);
            }
        }

       let huffleCards = huffles.map((character, index) => {
            return (
                <div className="houseCard" key={index} >
                    <h1 className="houseCard-name">{character.name}</h1>

                    <div className="houseCard-data">Role: {character.role}</div>
                    <div className="houseCard-data">Species: {character.species}</div>
                </div>
            )
            })
            
        return (
            <div className="card-container">{huffleCards}</div>

            )
        }
       
}

export default Hufflepuff;