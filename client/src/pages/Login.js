import React, { useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../store/action/Login-action";

export default function () {
  const [data, setData] = useState();
  //   const dispatch = useDispatch();
  const handleSubmit = () => {
    // dispatch(setUser(data));
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div>
      <div>LoginPage</div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert Product Email"
              onChange={handleInput}
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
