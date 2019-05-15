import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Gryffindor from './Gryffindor/Gryffindor';
import Hufflepuff from './Hufflepuff/Hufflepuff';
import Ravenclaw from './Ravenclaw/Ravenclaw';
import Slytherin from './Slytherin/Slytherin';
// import characters from './characters.json';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      // characters: characters   ==> if manually pulling from hard-coded json
      characters: []
    }
  }

  componentDidMount () {
    axios.get('https://www.potterapi.com/v1/characters/?key=$2a$10$63GTbZLWfMtyBrCfDRaRyus98dC5tg6PikwPTPaVUgtJkUeEBsJpy')
    // axios.get('localhost:4000/hp/')
      .then((res) => {
        console.log(res)
        this.setState({
          characters: res.data
        })
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
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