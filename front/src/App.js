import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import User from './Components/User';
import Login from './Components/User/login';
import Box from './Components/box';
import Edit from './Components/box/edit';

const log =() =>(
  <Login/>
);
const use =() =>(
  <User/>
);
const box =() =>(
  <Box/>
);
const ed =({ match }) =>(
  <Edit match={match}/>
);


class App extends Component {
  render() {
    return (
        <div>

          <Container>
            <header>
              hi
            </header>
          <div>
      <Router>
        <Switch>
          <Route exact path="/user" render={use} />
          <Route exact path="/user/login" render={log} />
          <Route  path="/box/:id" component={ed} />
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

