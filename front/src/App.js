import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './lib/materialIcons.css';
import User from './Components/User';
import Login from './Components/User/login';
import Box from './Components/box';
import Edit from './Components/box/edit';
import img from './bellbois.svg';
import { Text, View } from 'react-native';

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
        <Veiw>

          <Container>
            <header>
              <img id="logo" className="img img-responsive" src={img} alt="BellBois" />
            </header>
          <Veiw>
      <Router>
        <Switch>
          <Route exact path="/user" render={use} />
          <Route exact path="/user/login" render={log} />
          <Route exact path="/box/:id" component={ed} />
          <Route exact path="/box" render={box} />
        </Switch>
  </Router>
      </Veiw>
            <footer>
              bye
            </footer>
          </Container>

        </Veiw>
    );
  }
}

export default App;

