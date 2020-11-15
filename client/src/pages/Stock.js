import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import ListProduct from "../components/ListProduct";
import AddStock from "../components/addProduct";
import "./Stock.css";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchProduct } from "../store/action/Product-action";

function Stock() {
  const auth = useSelector((state) => state.loginReducer);
  const productReducer = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    dispatch(fetchProduct());
    setDataProduct(productReducer);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  if (!auth.loginStatus) return <Redirect to={"/login"} />;

  if (productReducer.loadingStore) return <div>Loading...</div>;
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
            <th scope="col">StoreID</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {productReducer.dataProduct.map((product, i) => {
            return <ListProduct product={product} key={i} />;
          })}
        </tbody>
      </Table>
      <AddStock isOpen={isOpen} hideModal={hideModal} />
      {/* <pre>{JSON.stringify(productReducer, null, 2)}</pre> */}
    </div>
  );
}

export default Stock;
