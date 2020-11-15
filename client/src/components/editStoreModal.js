import React from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";

function editStoreModal(props) {
  const { isOpen, hideModal } = props;
  return (
    <div>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Add Store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Store Name</Form.Label>
              <Form.Control type="text" placeholder="Insert Product Name" />
              <Form.Text className="text-muted">
                Make sure the shop name is correct.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Store Address</Form.Label>
              <Form.Control type="text" placeholder="Insert Product Price" />
              <Form.Text className="text-muted">
                make sure the store address is correct.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button
              variant="primary"
              type=""
              className="btn"
              onClick={hideModal}
            >
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default editStoreModal;
