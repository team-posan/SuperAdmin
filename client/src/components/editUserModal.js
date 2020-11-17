import React, { useState, useEffect } from "react";
import { Button, Col, Modal, Form } from "react-bootstrap";
import { editUser } from '../store/action/User-action'
import { useSelector, useDispatch } from "react-redux";



function EditUser(props) {
    console.log(props)
    const {hideModal, isOpen, dataEdit } = props
    const newDataEdit = {...dataEdit,password:'admin'}
    const [dataedit, setDataEdit] = useState(newDataEdit)

    const dispatch = useDispatch()


    const onChangeHandler = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        console.log(value);
        setDataEdit({ ...dataedit, [name]: value })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(editUser(dataedit))
        hideModal()
    }
    return (
        <div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => onSubmitHandler(e)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>cashier Name</Form.Label>
                            <Form.Control type="text" placeholder="Insert User Name" name="username" defaultValue={dataEdit.username} onChange={(e) => onChangeHandler(e)} />
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

export default EditUser;
    