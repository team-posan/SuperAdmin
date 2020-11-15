import React from "react";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function Dashboard() {
  const auth = useSelector((state) => state.loginReducer);
  const productReducer = useSelector((state) => state.productReducer);
  const storeReducer = useSelector((state) => state.storeReducer);

  console.log(auth, "auth");
  console.log(productReducer, "product");
  console.log(storeReducer, "store");

  if (!auth.loginStatus) return <Redirect to={"/login"} />;
  return (
    <div className="wraper">
      <div className="dsb-top"></div>
      <div className="dsb-mdl"></div>
      <div className="dsb-btm"></div>
    </div>
  );
}

export default Dashboard;
