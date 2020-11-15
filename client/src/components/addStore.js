import React, { useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { addStore } from '../store/action/Store-action'

function AddStore({ isOpen, hideModal }) {


  const [ dataAdd, setDataAdd ] = useState({})

  const dispatch = useDispatch()

  const onChangeHandler=(e)=>{
    e.preventDefault()
    const { value, name } = e.target

    setDataAdd({...dataAdd,[name]:value})
  }

  const onSubmitHandler=(e)=>{
    e.preventDefault()
    dispatch(addStore(dataAdd))
    hideModal()
  }
  return (
    <div>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e)=>onSubmitHandler(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Store Name</Form.Label>
              <Form.Control type="text" placeholder="Insert Store Name" name="store_name" onChange={(e)=>onChangeHandler(e)} />
              <Form.Text className="text-muted">
                Make sure the shop name is correct.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Store Address</Form.Label>
              <Form.Control type="text" placeholder="Insert Store Address" name="store_address" onChange={(e)=>onChangeHandler(e)} />
              <Form.Text className="text-muted">
                make sure the store address is correct.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit"  >
              Submit
            </Button>
            <Button
              variant="primary"
              type=""
              className="btn"
              onClick={(e)=>hideModal}
            >
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddStore;
