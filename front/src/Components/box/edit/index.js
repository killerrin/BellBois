import React, { Component } from 'react';
import lib from '../../../lib/lib';


import { Form,FormGroup,Label, Input,ListGroup, ListGroupItem } from 'reactstrap';


class Edit extends Component {
  constructor(props) {

    super(props);
    console.log(props);
    this.state = {
      box: {},
    }
  }



  async getBox(id) {
    this.setState({ boxes: await lib.bellbois.bellbois['@dev'].getBox(id) });
  }

  componentDidMount() {
    {const {id} = this.props.match.params.id
      console.log(id)}
    this.getBox(this.id);
  }

  render() {
    return (
      <Form>
        <p></p>
        <FormGroup>
          <Label for="name">name</Label>
          <Input type="name" name="name" id="name" value= {this.state.box.name} placeholder="name" />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="description" name="description" id="description" value= {this.state.box.description} placeholder="description" />
        </FormGroup>

        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="location" name="password" id="password" value= {this.state.box.location} placeholder="location" />
        </FormGroup>

        <FormGroup>
          <Label for="Item">Items</Label>
          <Input type="item" name="item" id="item" placeholder="item" />
        <ListGroup>

        </ListGroup>
        </FormGroup>

        <FormGroup>
          <Input type="submit" value="Save" />
        </FormGroup>
      </Form>

    )
  }
}



export default Edit;
