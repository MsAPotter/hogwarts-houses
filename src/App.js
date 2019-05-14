import React, { Component } from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';
import './App.css'

class App extends Component {
  constructor(props) {
    super()


  }

  render() {
    return (
      <div className="body">
      <h1>Hogwarts Houses</h1>
        <nav>
          <li><Link to="/gryffindor" className="nav">Gryffindor</Link></li>
          <li><Link to="/ravenclaw" className="nav">Ravenclaw</Link></li>
          <li><Link to="/griffindor" className="nav">Hufflepuff</Link></li>
          <li><Link to="/slytherin" className="nav">Slytherin</Link></li>
        </nav>

        <div className="image-container">
          <img src="https://images.pottermore.com/bxd3o8b291gf/4WGamkMvBmg2SE6g8y6IkY/07c89b29b0ec0287281f0cd16763a8f4/01-Godric-Small-GIF-2.gif" />
          <img src="https://images.pottermore.com/bxd3o8b291gf/5opvBSIV8sEU2QyG8gSwMS/05fd83bda2b6746751018095a9061d0f/03-Ravenclaw-Small-GIF-1.gif?w=1100&q=85" />
          <img src="https://images.pottermore.com/bxd3o8b291gf/3afkxANXQAW0G8uOgwYYYU/339684d4be8818c4a7ef639d5bbfe7cb/04-Helga-Small-GIF-1.gif?w=1100&q=85" />
          <img src ="https://images.pottermore.com/bxd3o8b291gf/x6JKzQ2eC4iyQaGeQI4AO/fdb195732fccab5f68bd7ddf3c7c2421/02-Salazar-Small-GIF-1.gif?w=1100&q=85" />
        </div>

        <Switch>
          {/* <Route
            exact path="/"
            render={routerProps => (
              <Home {...routerProps} {...this.state} />
            )}
          />
          <Route
            exact path="/gryffindor"
            render={routerProps => (
              <Show {...routerProps} {...this.state} />
            )}
          /> */}
        </Switch>
      </div>
    );
  }
}

export default App;