import React, { Component } from 'react';
import lib from '../../lib/lib';
import swal from 'sweetalert2';
import { QRCode } from 'react-qr-svg';

import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button, Col, Row } from 'reactstrap';

class Box extends Component {
  constructor() {
    super();
    
    this.state = {
      boxes: [],
      fetched: false,

    };
    this.createCard= this.createCard.bind(this);
  }
  
  createCard(boxes) {
    console.log(boxes.ID)
    return (
      <Col sm="3">
        <Card className="border-dark mb-3" key={boxes.ID}>
          <CardImg top width="100%" src="https://cdn3.bigcommerce.com/s-iwa5azhm/products/3005/images/8589/mystery_box1__25761__96670.1430944750.400.400.jpg?c=2" alt="Card image cap"/>
          <CardBody>
            <CardTitle>{boxes.name}</CardTitle>
            <CardText>{boxes.description}</CardText>
            <Link to={`/box/${boxes.ID}`} className="btn btn-outline-info btn-sm">Edit</Link>{' '}
            <Button outline size="sm" color="danger" value={boxes.ID} onClick={this.onDeleteBox.bind(this, boxes.ID)}>Delete</Button>
          </CardBody>
        </Card >
      </Col>
    )
  }


  async onDeleteBox(id) {
    console.log(id)
    await lib.bellbois.bellbois['@dev'].deleteBox(id);
    const newItemList = this.boxes.items.slice(0);
    newItemList.splice(this.boxes.items.findIndex(boxes => boxes.ID === id), 1);
    this.setState({ boxes: newItemList });
  }






  openWizard(e) {
    swal({
      title: 'Ready To Create A Box?',
      text: "Get ready to print your qr code!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Create it!',
      cancelButtonText: 'Maybe later!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then(async(result) => {
      if (result.value) {
        const {id} = await lib.bellbois.bellbois['@dev'].createBox();
        console.log(id);
        swal({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            //imageUrl: qr,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false
          }
        )
      } else if (
      result.dismiss === swal.DismissReason.cancel
      ) {
        swal(
          'Cancelled',
          'Maybe Another Time :)',
          'error'
        )
      }
    })
  }

  async getBoxes() {
    this.setState({ boxes: await lib.bellbois.bellbois['@dev'].getBoxes(), fetched: true });
  }

  componentDidMount() {
    this.getBoxes();
  }

  createQR(id) {
    return (
      <QRCode
        bgColor="#0000ff"
        fgColor="#ff0000"
        level="Q"
        style={{ width: 256 }}
        value={`https://bellbois.tech/box/${id}`}
      />
    );
  }

  render() {
    return (
      <div>
        <Button color="success" className="float-right" size="sm" onClick={this.openWizard}><i className="material-icons">add</i></Button>{' '}
        <Row>
        {this.state.fetched === false || this.state.boxes.length ? this.state.boxes.map(this.createCard): "You have no boxes!!!!!1!One!"}
        </Row>
      </div>

    )
  }
}

export default Box;
