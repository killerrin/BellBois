import React, {Component} from 'react';
import lib from '../../lib/lib';
import swal from 'sweetalert2';
import {QRCode} from 'react-qr-svg';

import {Link, Redirect} from 'react-router-dom';
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row} from 'reactstrap';

class Box extends Component {
  constructor() {
    super();

    this.state = {
      boxes: [],
      fetched: false,
      redirect: false,

    };
    this.createCard = this.createCard.bind(this);
    this.openWizard = this.openWizard.bind(this);
  }

  createCard(boxes) {
    console.log(boxes.ID);
    return (
      <Col key={boxes.ID} sm="3">
        <Card className="border-dark mb-3" key={boxes.ID}>
          <CardImg top width="100%"
                   src="https://cdn3.bigcommerce.com/s-iwa5azhm/products/3005/images/8589/mystery_box1__25761__96670.1430944750.400.400.jpg?c=2"
                   alt="Card image cap"/>
          <CardBody>
            <CardTitle>{boxes.name}</CardTitle>
            <CardText>{boxes.description}</CardText>
            <Link to={`/box/${boxes.ID}`} className="btn btn-outline-info btn-sm">Edit</Link>{' '}
            <Button outline size="sm" color="danger" value={boxes.ID} onClick={this.onDeleteBox.bind(this, boxes.ID)}>Delete</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }


  async onDeleteBox(id) {
    console.log(id);
    await lib.bellbois.bellbois['@dev'].deleteBox(id);
    const newItemList = this.state.boxes.slice(0);
    newItemList.splice(this.state.boxes.findIndex(boxes => boxes.ID === id), 1);
    this.setState({boxes: newItemList});
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
    }).then(async (result) => {
      if (result.value) {
        const {ID} = await lib.bellbois.bellbois['@dev'].createBox();
        console.log(ID);
        swal({
            title: 'Sweet!',
            text: 'Here is your QR code:',
            imageUrl: `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(`https://bellbois.tech/box/${ID}`)}&size=200x200`,
            imageWidth: 200,
            imageHeight: 200,
            imageClass: "print-qr-code",
            imageAlt: 'QR Code',
            animation: false,
            confirmButtonText: "Print"
          }
        ).then(async (result) => {
            window.print();
            this.setState({ redirect: `/box/${ID}` })
        });

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
    try {
      this.setState({boxes: await lib.bellbois.bellboxes['@dev'].getBoxes(), fetched: true});
    }
    catch (e) {
      this.setState({ redirect: "/box" });
    }
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
        style={{width: 256}}
        value={`https://bellbois.tech/box/${id}`}
      />
    );
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirect} />;
    }
    return (
      <div>
        <Button color="success" className="float-right" size="sm" onClick={this.openWizard}><i
          className="material-icons">add</i></Button>{' '}
        <Row>
          {this.state.fetched === false || this.state.boxes.length ? this.state.boxes.map(this.createCard) : "You have no boxes!!!!!1!One!"}
        </Row>
      </div>

    )
  }
}

export default Box;
