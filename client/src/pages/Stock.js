import React, { useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import ListProduct from "../components/ListProduct";
import AddStock from "../components/addProduct";
import "./Stock.css";

function Stock() {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="wraper">
      <Button onClick={showModal}>Add Product</Button>
      <Table striped bordered hover variant="light">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Img-url</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <ListProduct />
        </tbody>
      </Table>
      <AddStock isOpen={isOpen} hideModal={hideModal} />
    </div>
  );
}

export default Stock;
