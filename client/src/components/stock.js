import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

function Stocks({ isOpenEdit, hideModalEdit }) {
  return (
    <div>
      <Modal show={isOpenEdit} onHide={hideModalEdit}>
        <Modal.Header>
          <Modal.Title>Update Stock</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Upadte Stock</Form.Label>
              <Form.Control type="number" placeholder="Insert your number" />
              <Form.Text className="text-muted">
                Make sure your input is correct.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button
              variant="primary"
              type=""
              className="btn"
              onClick={hideModalEdit}
            >
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Stocks;
