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

  handleSubmit(e) {
    e.preventDefault();
  // const result = await lib.bellbois.userLogin(
     // {
     //   this.username,
     //   this.password,
    //  }
  //  );
  }

  render() {
    return (
      <Form>


            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>




            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Password" />
            </FormGroup>





            <FormGroup>
              <Button color="primary" type="submit" block>Submit</Button>
            </FormGroup>

      </Form>
    )
  }
}


export default Login;
