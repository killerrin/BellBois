import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import User from './Components/User'
import Login from './Components/User/login'
import Box from './Components/box'

const log =() =>(
  <Login/>
);
const use =() =>(
  <User/>
);
const box =() =>(
  <Box/>
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
          <Route exact path="/box" render={box} />
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

