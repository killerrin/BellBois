import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import User from './Components/User'
import Login from './Components/User/login'

const log =() =>(
  <Login/>
);
//const use =() =>(
 // <User/>
//);

class App extends Component {
  render() {
    return (
        <Router>
          <Container>
          <div className="App">
        <Switch>

          <Route exact path="/user/login" render={log} />
        </Switch>
      </div>
          </Container>
    </Router>
    );
  }
}

export default App;

