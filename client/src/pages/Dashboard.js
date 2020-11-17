import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function Dashboard() {
  const auth = useSelector((state) => state.loginReducer);
  const productReducer = useSelector((state) => state.productReducer);
  const storeReducer = useSelector((state) => state.storeReducer);
  const logReducer = useSelector((state) => state.logReducer)

  // const dispatch = useDispatch();

  const [dataDashboard, setDataDashboard] = useState(0);
  const [dataProduct, setDataProduct] = useState([]);
  const [dataStore, setDataStore] = useState([]);

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
    <div className="wraper">
      <div className="dsb-top">
        <h1>total transaction</h1>
        <h4>{dataDashboard}</h4>
        {/* {JSON.stringify(dataDashboard, null, 2)} */}
      </div>
      <div className="dsb-mdl">{JSON.stringify(dataProduct, null, 2)}</div>
      <div className="dsb-btm">
        <h1>Total Store</h1>
        {JSON.stringify(dataStore, null, 2)}</div>
    </div>
  );
}

export default Dashboard;
