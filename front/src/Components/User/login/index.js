import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';

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
    const result = await lib.bellbois.authenticateUser(
      {
        username: this.state.username,
        password: this.state.password,
      }
    );
  }

  onChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="email">email</Label>
          <Input type="email" name="email" id="email" placeholder="email address" value={ this.state.username } onChange={ this.onChange.bind(this, "username") } />
        </FormGroup>

        <FormGroup>
          <Label for="password">password</Label>
          <Input type="password" name="password" id="password" placeholder="password" value={ this.state.username } onChange={ this.onChange.bind(this, "password") }/>
        </FormGroup>

        <FormGroup>
          <Button color="primary" type="submit" block>Submit</Button>
        </FormGroup>
      </Form>
    )
  }
}


export default Login;
