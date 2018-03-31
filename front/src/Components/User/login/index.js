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
        <Row>
          <Col xs={{ size: 4, offset: 4}}>
            <FormGroup>
              <Label for="email">email</Label>
              <Input type="email" name="email" id="email" placeholder="email address" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={{ size: 4, offset: 4}}>
            <FormGroup>
              <Label for="password">password</Label>
              <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={{ size: 4, offset: 4}}>
            <FormGroup>
              <Button color="primary" type="submit" block>Submit</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    )
  }
}


export default Login;
