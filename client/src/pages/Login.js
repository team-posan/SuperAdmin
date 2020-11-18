import React, { useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/action/Login-action";
import "./Login.css"

export default function () {
  const [data, setData] = useState({
    username:'admin'
  });
  const dispatch = useDispatch();
  const auth = useSelector(state => state.loginReducer)


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginAction(data.username, data.password));
  };


  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  if (auth.loginStatus) return <Redirect to={'/dashboard'} />

  return (
    <div>
        <div className="login">
          <h1 style={{color:'#1E2749'}}>Login Page</h1>
          <div className="box-login" style={{height:'50vh', padding:'20px'}}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="admin"
                  disabled
                  value={'admin'}
                  name="username"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="******"
                  onChange={handleInput}
                  name="password"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Button className="add-btn" style={{borderRadius:'3px'}} type="submit">
                Submit
            </Button>
            </Form>
          </div>
        </div>
    
    </div>
  );
}
