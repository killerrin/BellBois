import React, { Component } from 'react';
import lib from '../../../lib/lib';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      await lib.bellbois.bellbois['@dev'].authenticateUser(this.state.username, this.state.password);
      window.location.href = "/box";
    }
    catch(e) {
      console.error(e);
    }
  }

  onChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <Form method="POST" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="email">email</Label>
          <Input type="email" name="email" id="email" placeholder="email address" value={ this.state.username } onChange={ this.onChange.bind(this, "username") } />
        </FormGroup>

        <FormGroup>
          <Label for="password">password</Label>
          <Input type="password" name="password" id="password" placeholder="password" value={ this.state.password } onChange={ this.onChange.bind(this, "password") }/>
        </FormGroup>

        <FormGroup>
          <Button color="primary" type="submit" block>Submit</Button>
        </FormGroup>

        <FormGroup>
          Don't have an account? <Link to="/user">Make one</Link>
        </FormGroup>
      </Form>
    )
  }
}


export default Login;
