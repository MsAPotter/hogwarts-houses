import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Gryffindor from './Gryffindor/Gryffindor';
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
        </Switch>
      </div>
    );
  }
}

export default App;