import React, { Component } from 'react';
import lib from '../../../lib/lib';


import { Form,FormGroup,Label, Input,ListGroup, ListGroupItem } from 'reactstrap';
import { Redirect } from 'react-router';




class Edit extends Component {
  constructor(props) {

    super(props);
    console.log(props);
    this.state = {
      items: [],
      box: {},
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }






  handleSubmit(e){
    e.preventDefault();
    lib.bellbois.bellbois['@dev'].updateBox(this.state.name, this.state.description,this.state.location);
    this.setState({redirect: true});

  }

  createItem(item) {
    return (
      <ListGroupItem>{item}</ListGroupItem>
    )
  }
  async getBox(id) {
    this.setState({ boxes: await lib.bellbois.bellbois['@dev'].getBox(id) });
  }

  componentDidMount() {
    const {id} = this.props.match.params.id;
    this.getBox(id);

  }

  onChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/box" />;
    }
    return (
      <Form method="POST" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="name">name</Label>
          <Input type="name" name="name" id="name" value= {this.state.box.name} onChange={ this.onChange.bind(this, "name")} placeholder="Name" />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="description" name="description" id="description" value= {this.state.box.description} onChange={ this.onChange.bind(this, "description")} placeholder="description" />
        </FormGroup>

        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="location" name="password" id="password" value= {this.state.box.location} onChange={ this.onChange.bind(this, "location")} placeholder="location" />
        </FormGroup>

        <FormGroup>
          <Label for="Item">Items</Label>
          <Input type="item" name="item" id="item" placeholder="item" />
        <ListGroup>
          {this.state.items.map(this.createItem)}
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
