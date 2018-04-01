import React, { Component } from 'react';
import lib from '../../../lib/lib';


import { Form,FormGroup,Label, Input,ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Redirect } from 'react-router';




class Edit extends Component {
  constructor(props) {

    super(props);
    console.log(props);
    this.state = {
      items: [],
      box: {
        name: "loading...",
        description: "loading...",

        location: "loading...",


      },
      itemName:"",
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitItem = this.handleSubmitItem.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();
    const {id} = this.props.match.params;
    console.log(id);
    lib.bellbois.bellbois['@dev'].updateBox(id, this.state.box.name, null, this.state.box.description, 0, 0);
    this.setState({redirect: true});

  }

  createItem(item) {
    return (
    <ListGroupItem key={item.ID}>{item.name}</ListGroupItem>
    )
  }
  async getBox(id) {
    this.setState({ box: await lib.bellbois.bellbois['@dev'].getBox(id) });
  }
  async getBoxItems(id) {
    this.setState({ items: await lib.bellbois.bellbois['@dev'].getBoxItems(id) });
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    console.log(id);

    this.getBoxItems(id);
    this.getBox(id);

  }


  onChange(key, event) {
    this.setState({ box: Object.assign({}, this.state.box, {[key]: event.target.value })});
  }

  onChangeItem(key, event) {
    this.setState({[key]: event.target.value });
  }

  async handleSubmitItem(e){
    e.preventDefault();
    const {id} = this.props.match.params;
    console.log(id);
    const newItem = await lib.bellbois.bellbois['@dev'].createBoxItem(id, this.state.itemName);
    const newItemList = this.state.items.slice(0);
    newItemList.push(newItem);
    this.setState({ items: newItemList, itemName: "" });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/box" />;
    }
    return (
      <div>
      <Form method="POST" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="name" name="name" id="name" value= {this.state.box.name} onChange={ this.onChange.bind(this, "name")} placeholder="Name" />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="description" name="description" id="description" value= {this.state.box.description || ""} onChange={ this.onChange.bind(this, "description")} placeholder="description" />
        </FormGroup>

        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="location" name="password" id="password" value= {this.state.box.location || ""} onChange={ this.onChange.bind(this, "location")} placeholder="location" />
        </FormGroup>

        <FormGroup>
          <Input type="submit" value="Save" />
        </FormGroup>
      </Form>
      <div>
        <Form method="POST" onSubmit={this.handleSubmitItem}>
      <Label for="Item">Items</Label>
        <Input type="item" name="item" id="item" placeholder="item" value= {this.state.itemName || ""} onChange={this.onChangeItem.bind(this, "itemName")}/>
          <ListGroup>
              {this.state.items.map(this.createItem)}
          </ListGroup>
        <Button outline color="primary">Submit Item</Button>{' '}
        </Form>
      </div>
      </div>

    )
  }
}



export default Edit;
