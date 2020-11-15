import React from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";

function addStock({ isOpen, hideModal }) {
  return (
    <div>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Insert Product Name" />
              <Form.Text className="text-muted">
                Make sure the name of the item matches.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Insert Product Price" />
              <Form.Text className="text-muted">
                Make sure the price of the item is appropriate.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Img URL</Form.Label>
              <Form.Control type="text" placeholder="Insert Image Url" />
              <Form.Text className="text-muted">
                Make sure the image-url matches the type of item.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="text" placeholder="Insert Product Stock" />
              <Form.Text className="text-muted">
                Recalculate the initial stock.
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

export default addStock;
