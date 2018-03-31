import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import User from './Components/User'

const me =() =>(
  <User/>
);

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
        <Switch>
          <Route exact path="/user" render={me} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;

