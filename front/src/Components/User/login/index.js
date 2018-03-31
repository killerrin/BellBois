import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username = "",
      password = "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const result = await lib.bellbois.userLogin(
      {
        this.username,
        this.password,
      }
    );
  }

  render() {
    return (
      <Form onSubmit={submit}>
        <FormGroup>
          <Label for="email">email</Label>
          <Input type="email" name="email" id="email" placeholder="email address" />
        </FormGroup>

        <FormGroup>
          <Label for="password">password</Label>
          <Input type="password" name="password" id="password" placeholder="password" />
        </FormGroup>

        <FormGroup>
          <Input type="submit" value="login" />
        </FormGroup>
      </Form>
    )
  }
}
