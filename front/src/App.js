import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import User from './Components/User'
import Login from './Components/User/login'

const log =() =>(
  <Login/>
);
const use =() =>(
  <User/>
);

class App extends Component {
  render() {
    return (
        <div>

          <Container>
            <header>
              hi N
            </header>
          <div>
      <Router>
        <Switch>
          <Route exact path="/user" render={use} />
          <Route exact path="/user/login" render={log} />
        </Switch>
  </Router>
      </div>
            <footer>
              bye
            </footer>
          </Container>

        </div>
    );
  }
}

export default App;

