import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Gryffindor from './Gryffindor/Gryffindor';
import Hufflepuff from './Hufflepuff/Hufflepuff';
import Ravenclaw from './Ravenclaw/Ravenclaw';
import Slytherin from './Slytherin/Slytherin';
import characters from './characters.json';

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      characters: characters
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Switch>
          <Route
            exact path="/"
            render={routerProps => (
              <Home {...routerProps} {...this.state} />
            )}
          />

          <Route
            exact path="/gryffindor"
            render={routerProps => (
              <Gryffindor {...routerProps} {...this.state} />
            )}
          />

          <Route
            exact path="/ravenclaw"
            render={routerProps => (
              <Ravenclaw {...routerProps} {...this.state} />
            )}
          />

          <Route
            exact path="/hufflepuff"
            render={routerProps => (
              <Hufflepuff {...routerProps} {...this.state} />
            )}
          />

          <Route
            exact path="/slytherin"
            render={routerProps => (
              <Slytherin {...routerProps} {...this.state} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;