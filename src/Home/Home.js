import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
// import { placeholder } from '@babel/types';

class Home extends Component {
    constructor(props) {
        super()

        this.state = {
            name: "",
            role: "",
            species: "",
            house: "",
            dumbledoresArmy: Boolean,
            deathEater: Boolean
        }
        this.handleCharacter = this.handleCharacter.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCharacter(event) {
        event.preventDefault();

        let num = Math.floor(Math.random() * 4)
        console.log(num)

        if (num === 1) {
            // house === "Gryffindor"
            this.setState({ house: "Gryffindor"})
        } else if (num === 2) {
            // house === "Ravenclaw"
            this.setState({ house: "Ravenclaw"})
        } else if (num === 3) {
            // house === "Hufflepuff"
            this.setState({ house: "Hufflepuff"})
        } else {
            // house === "Slytherin"
            this.setState({ house: "Slytherin"})
        }
        // console.log(house)





        console.log(this.state.house)

        let newCharacter = {
            name: this.state.name,
            role: this.state.role,
            species: this.state.species,
            dumbledoresArmy: this.state.dumbledoresArmy,
            deathEater:this.state.deathEater,
            house: this.state.house
        }
        console.log(newCharacter)

        this.props.createCharacter(newCharacter)

    }



    render() {
        return (
            <div className="body">
            <h1>Hogwarts Houses</h1>

            <div className="container">
                <div>
                <Link to="/gryffindor" className="nav"><li>Gryffindor</li>
                <img src="https://images.pottermore.com/bxd3o8b291gf/4WGamkMvBmg2SE6g8y6IkY/07c89b29b0ec0287281f0cd16763a8f4/01-Godric-Small-GIF-2.gif" alt={"Gryffindor founder"}/>
                </Link>
                </div>
                <div>
                <Link to="/ravenclaw" className="nav"><li>Ravenclaw</li>
                <img src="https://images.pottermore.com/bxd3o8b291gf/5opvBSIV8sEU2QyG8gSwMS/05fd83bda2b6746751018095a9061d0f/03-Ravenclaw-Small-GIF-1.gif?w=1100&q=85" alt={"Ravenclaw founder"}/>
                </Link>
                </div>
                <div>
                <Link to="/hufflepuff" className="nav"><li>Hufflepuff</li>
                <img src="https://images.pottermore.com/bxd3o8b291gf/3afkxANXQAW0G8uOgwYYYU/339684d4be8818c4a7ef639d5bbfe7cb/04-Helga-Small-GIF-1.gif?w=1100&q=85" alt={"Hufflepuff founder"}/>
                </Link>
                </div>
                <div>
                <Link to="/slytherin" className="nav"><li>Slytherin</li>
                <img src ="https://images.pottermore.com/bxd3o8b291gf/x6JKzQ2eC4iyQaGeQI4AO/fdb195732fccab5f68bd7ddf3c7c2421/02-Salazar-Small-GIF-1.gif?w=1100&q=85" alt={"Slytherin founder"}/>
                </Link>
                </div>
            </div>

            <div className="newCharacterForm">
                <h2>What House Are You?</h2>
                
                <form onSubmit={this.handleCharacter} className="form-box">

                    <label htmlFor="name">Name</label>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    value={this.props.name}
                    onChange={this.handleChange}></input>

                    <label htmlFor="role">Role</label>
                    <input 
                    type="text"
                    name="role"
                    id="role"
                    value={this.props.role}
                    onChange={this.handleChange}></input>
                    
                    <label htmlFor="species">Species</label>   
                    <input 
                    type="text"
                    name="species"
                    id="species"
                    value={this.props.species}
                    onChange={this.handleChange}></input>
                    
                    <label htmlFor="dumbledoresArmy">Dumbledore's Army?</label>
                    
                    <input 
                    type="text"
                    name="dumbledoresArmy"
                    id="dumbledoresArmy"
                    value={this.props.dumbledoresArmy}
                    onChange={this.handleChange}></input>
                    
                    <label htmlFor="deathEater">Death Eater?</label>
                    
                    <input
                    type="text" 
                    name="deathEater"
                    id="deathEater"
                    value={this.props.deathEater}
                    onChange={this.handleChange}
                    className="text"></input>

                    <button type="submit">Submit</button>
                </form>
                
                </div>




            </div>
        );
    }
}

export default Home;