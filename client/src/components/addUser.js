import React, { useState, useEffect } from "react";
import { Button, Col, Modal, Form } from "react-bootstrap";
import { addUser } from '../store/action/User-action'
import { fetchStore } from "../store/action/Store-action";
import { useSelector, useDispatch } from "react-redux";
import Option from "../components/option"



function AddUser({ isOpen, hideModal }) {

    const storeReducer = useSelector((state) => state.storeReducer);

    const [dataStore, setDataStore] = useState([]);

    const [dataAdd, setDataAdd] = useState({})

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStore());
        setDataStore(storeReducer);
    }, []);

    const onChangeHandler = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        console.log(value);
        setDataAdd({ ...dataAdd, [name]: value })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(addUser(dataAdd))
        hideModal()
    }
    return (
        <div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>Store</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => onSubmitHandler(e)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>cashier Name</Form.Label>
                            <Form.Control type="text" placeholder="Insert User Name" name="username" onChange={(e) => onChangeHandler(e)} />
                            <Form.Text className="text-muted">
                                Make sure the cashier name is correct.
              </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Insert Store Address" name="password" onChange={(e) => onChangeHandler(e)} />
                            <Form.Text className="text-muted">
                                make sure password is correct.
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

                        <Button variant="primary" type="submit"  >
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

export default AddUser;
