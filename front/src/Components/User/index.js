import React, { Component } from 'react';
import lib from '../../lib/lib';

import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router';


class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirm: "",
      redirect: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(event) {
    event.preventDefault();
    if (this.state.password !== this.state.confirm) {
      return;
    }
    await lib.bellbois.bellbois['@dev'].createUser(this.state.email, this.state.password);
    this.setState({ redirect: true });
  }

  onChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/box" />;
    }
    return (
      <Form method="POST" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email address" onChange={this.onChange.bind(this, "email")} />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange.bind(this, "password")} />
        </FormGroup>

        <FormGroup>
          <Label for="password">Confirm Password</Label>
          <Input type="password" name="password" id="password" placeholder="Confirm Password" onChange={this.onChange.bind(this, "confirm")} />
        </FormGroup>

        <FormGroup>
          <Input type="submit" className="btn-primary" value="Create Account" />
        </FormGroup>
      </Form>
    )
  }
}


export default User;