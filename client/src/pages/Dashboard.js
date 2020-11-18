import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../store/action/Product-action"
import { fetchStore } from "../store/action/Store-action"
import { fetchLog } from "../store/action/Log-action"
import IncomeIcon from "../assets/income-icon.svg"
import Store from "../assets/store.svg"

import ListStock from "../components/listStockHabis"

function Dashboard() {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.loginReducer);
  const productReducer = useSelector((state) => state.productReducer);
  const storeReducer = useSelector((state) => state.storeReducer);
  const logReducer = useSelector((state) => state.logReducer)

  // const dispatch = useDispatch();

  const [dataDashboard, setDataDashboard] = useState(0);
  const [dataProduct, setDataProduct] = useState([]);
  const [dataStore, setDataStore] = useState([]);

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])
  useEffect(() => {
    dispatch(fetchStore())
  }, [])
  useEffect(() => {
    dispatch(fetchLog())
  }, [])

  useEffect(() => {
    let value = 0
    if (!logReducer.loadingLog) {
      logReducer.dataLog.carts.map(cart => {
        value = value + (cart.quantity * cart.Product.price)
      })
    }
    const formatted = new Intl.NumberFormat('id', { currency: 'IDR', style: 'currency' }).format(value)
    setDataDashboard(formatted)
  }, [logReducer]);
  // console.log(logReducer.dataLog.carts, 'ini dashboard');




  useEffect(() => {
    const filteredProduct = productReducer.dataProduct.filter(product => product.stock < 150)
    setDataProduct(filteredProduct)

  }, [productReducer]);

  useEffect(() => {
    setDataStore(storeReducer.dataStore.length)
    console.log(dataStore, 'data store');
  }, []);
  console.log(storeReducer, 'storeReducer');




  console.log(auth, "auth");
  console.log(productReducer, "product");
  console.log(storeReducer, "store");

  if (!auth.loginStatus) return <Redirect to={"/login"} />;
  // if (productReducer.loadingStore && storeReducer.loadingStore && logReducer.loadingLog) return <div>Loading...</div>;

  return (
    // <Container>
      <div className="wraper">
        <h1>Dashboard</h1>
        <Row>
          <Col>
            <div className="card">
              <Row>
                <Col className="icon-card">
                  <div>
                    <img src={IncomeIcon} width="80" />
                  </div>
                  <div className="card-txt">
                    <h4>
                      {dataDashboard}
                    </h4>
                    <p>
                      Total transaction
                </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col>
         
            <div className="card">
              <Row>
                <Col className="icon-card">
                  <div>
                    <img src={Store} width="80" />
                  </div>
                  <div className="card-txt">
                    <h4>
                      {dataStore}
                    </h4>
                    <p>
                      Total Store
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>


        <div className="dsb-top">
          <h1>STOCK</h1>
          <Table striped bordered responsive>
            <thead className="color">
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>
            <tbody>
              {dataProduct.map((stock, i) => {
                return <ListStock stock={stock} key={i} />;
              })}
            </tbody>
          </Table>
        </div>
        {/* <div className="dsb-mdl">{JSON.stringify(dataProduct, null, 2)}</div> */}
        <div className="dsb-btm">
        </div>
      </div>
    // </Container> 
  );
}

export default Dashboard;
