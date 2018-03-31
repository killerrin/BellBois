import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={me} />
          <Route exact path="/Me" render={me} />
          <Route path="/Me/Me/resume" render={resume} />
          <Route path="/Projects" render={projects} />
          <Route component={notFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
