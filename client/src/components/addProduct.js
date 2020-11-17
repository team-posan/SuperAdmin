import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/action/Product-action";
import { fetchStore } from '../store/action/Store-action'
import  { Redirect } from 'react-router-dom'
import Option from "../components/option"


function AddStock(props) {
  const { isOpen, hideModal, data } = props;
  const [dataAdd, setDataAdd] = useState({});

  const storeReducer = useSelector((state) => state.storeReducer);
  const auth = useSelector((state) => state.loginReducer);
  


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchStore())
  },[])

  console.log(dataAdd);
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setDataAdd({ ...dataAdd, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(dataAdd));
    hideModal();
  };
  console.log(storeReducer)
  if (!auth.loginStatus) return <Redirect to={"/login"} />;

  if (storeReducer.loadingStore) return <div>Loading...</div>;
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
                onChange={(e) => onChangeHandler(e)}
              />
              <Form.Text className="text-muted">
                Make sure the price of the item is appropriate.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Img URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Image Url"
                name="image_url"
                onChange={(e) => onChangeHandler(e)}
              />
              <Form.Text className="text-muted">Input Image Url.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insert Product Stock"
                name="stock"
                onChange={(e) => onChangeHandler(e)}
              />
              <Form.Text className="text-muted">
                Recalculate the initial stock.
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridStore">
              <Form.Label>Store</Form.Label>
              <Form.Control as="select" name="StoreId" onChange={(e) => onChangeHandler(e)}>
                  <option selected>Select Store</option>
                  {storeReducer.dataStore.map((store, i) => {
                      return <Option store={store} key={i} value={store.id}/>
                  })}
              </Form.Control>
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

export default AddStock;
