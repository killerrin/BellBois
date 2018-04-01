import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './lib/materialIcons.css';
import User from './Components/User';
import Login from './Components/User/login';
import Box from './Components/box';
import Edit from './Components/box/edit';
import img from './bellbois.svg';

const log = () => (
  <Login/>
);
const use = () => (
  <User/>
);
const box = () => (
  <Box/>
);
const ed = ({match}) => (
  <Edit match={match}/>
);


class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <header>
            <Row>
              <Col xs="6" sm="4" md="3" lg="2">
                <img id="logo" src={img} alt="BellBois" style={{ width: "100%", marginBottom: "1rem" }} />
              </Col>
            </Row>
          </header>
          <div>
            <Router>
              <Switch>
                <Route exact path="/" render={box} />
                <Route exact path="/user" render={use}/>
                <Route exact path="/user/login" render={log}/>
                <Route exact path="/box/:id" component={ed}/>
                <Route exact path="/box" render={box}/>
              </Switch>
            </Router>
          </div>
        </Container>

      </div>
    );
  }
}

export default App;

