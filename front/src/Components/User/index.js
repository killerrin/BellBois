import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class User extends Component {

  render() {
    return (
      <Form >
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email address" />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" />
        </FormGroup>

        <FormGroup>
          <Label for="password">Confirm Password</Label>
          <Input type="password" name="password" id="password" placeholder="Confirm Password" />
        </FormGroup>

        <FormGroup>
          <Input type="submit" value="Create Account" />
        </FormGroup>
      </Form>
    )
  }
}


export default User;