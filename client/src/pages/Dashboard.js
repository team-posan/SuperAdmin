import React from "react";
import "./Dashboard.css";
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function Dashboard() {
  const auth = useSelector(state=>state.loginReducer)
  const productReducer = useSelector(state=>state.productReducer)
  const storeReducer = useSelector(state=>state.storeReducer)

  console.log(auth, 'auth')
  console.log(productReducer, 'product')
  console.log(storeReducer, 'store')


  if(!auth.loginStatus) return <Redirect to={'/login'}/>
  return (
    <div className="wraper">
      <p>Dashboard</p>
    </div>
  );
}

export default Dashboard;
