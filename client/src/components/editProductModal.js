import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editProduct } from "../store/action/Product-action";

function EditStock(props) {
  const { isOpen, hideModal, data } = props;

  const [editData, setEditData] = useState(data);
  console.log(editData.id, "ini edit di addProduct modal");

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(editDa)
  }, [])

  // console.log('>>>>>>', editData);
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    // console.log(value);
    setEditData({ ...editData, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(editProduct(editData));
    hideModal();
  };
  return (
    <div>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => onSubmitHandler(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                defaultValue={editData.product_name}
                type="text"
                placeholder="Insert Product Name"
                name="product_name"
                onChange={(e) => onChangeHandler(e)}
              />
              <Form.Text className="text-muted">
                Make sure the name of the item matches.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insert Product Price"
                name="price"
                defaultValue={editData.price}
                onChange={(e) => onChangeHandler(e)}
              />
              <Form.Text className="text-muted">
                Make sure the price of the item is appropriate.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Img URL</Form.Label>
              <Form.Control
                defaultValue={editData.image_url}
                type="text"
                placeholder="Insert Image Url"
                name="image_url"
                onChange={(e) => onChangeHandler(e)}
              />
              <Form.Text className="text-muted">Input store id.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                defaultValue={editData.stock}
                type="number"
                placeholder="Insert Product Stock"
                name="stock"
                onChange={(e) => onChangeHandler(e)}
              />
              <Form.Text className="text-muted">
                Recalculate the initial stock.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>StoreId</Form.Label>
              <Form.Control
                defaultValue={editData.StoreId}
                type="number"
                placeholder="Insert Product Stock"
                name="StoreId"
                onChange={(e) => onChangeHandler(e)}
              />
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

export default EditStock;
