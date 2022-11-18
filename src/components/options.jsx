import React from "react";

import { Badge } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/main.css";

var lorem = "lorem lorem lorem lorem lorem lorem  ";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Badge className="badge"> Dicas</Badge>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{lorem}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Options() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="container">
        <div className="questions form-group text-center col-md-6 offset-md-3">
          <span className="h2"> {lorem}</span>
          <div className="btn-options">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              {lorem}
            </Button>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              {lorem}
            </Button>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              {lorem}
            </Button>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              {lorem}
            </Button>
          </div>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </>
  );
}

export default Options;
