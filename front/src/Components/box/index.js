import React, { Component } from 'react';
import lib from '../../lib/lib';

import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button, Col, Row } from 'reactstrap';

class Box extends Component {
  constructor() {
    super();
    
    this.state = {
      boxes: []
    };
  }
  
  createCard(boxes) {
    return (
      <Col sm="3">
        <Card className="border-dark mb-3" key={boxes.ID}>
          <CardImg top width="100%" src="https://cdn3.bigcommerce.com/s-iwa5azhm/products/3005/images/8589/mystery_box1__25761__96670.1430944750.400.400.jpg?c=2" alt="Card image cap"/>
          <CardBody>
            <CardTitle>{boxes.name}</CardTitle>
            <CardText>{boxes.description}</CardText>
            <Link to={`/box/${boxes.ID}`} className="btn btn-outline-info btn-sm">Edit</Link>{' '}
            <Button outline size="sm" color="danger">Delete</Button>
          </CardBody>
        </Card >
      </Col>
    )
  }

  async getBoxes() {
    this.setState({ boxes: await lib.bellbois.bellbois['@dev'].getBoxes() });
  }

  componentDidMount() {
    this.getBoxes();
  }

  render() {
    return (
      <div>
        <Button color="success" className="float-right" size="sm"><i className="material-icons">add</i></Button>{' '}
        <Row>
        {this.state.boxes.length ? this.state.boxes.map(this.createCard): "You have no boxes!!!!!1!One!"}
        </Row>
      </div>

    )
  }
}



export default Box;
