import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {
  render() {
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
  }

  submit(e) {
    e.preventDefault();
  }
}
