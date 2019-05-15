import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {


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
            </div>
        );
    }
}

export default Home;