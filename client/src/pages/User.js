import React, { useEffect, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import ListUser from "../components/listUser";
import AddUser from "../components/addUser";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchUser } from "../store/action/User-action";
import "./User.css"

function User() {
    const auth = useSelector((state) => state.loginReducer);
    const userReducer = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();

    const [datauser, setDatauser] = useState([]);

    useEffect(() => {
        console.log('<-----');
        dispatch(fetchUser());
        setDatauser(userReducer);
    }, []);
    
    const [isOpen, setIsOpen] = useState(false);
    const showModal = () => {
        setIsOpen(true);
    };
    
    const hideModal = () => {
        setIsOpen(false);
    };

    
    if (!auth.loginStatus) return <Redirect to={"/login"} />;
    
//     if (userReducer.loadingUser) return <Spinner animation="border" role="status">
//   </Spinner>
    return (
        <div className="wraper">
            <h1>List User</h1>
            <Button className="add-btn" onClick={showModal}>Add User</Button>
            <Table striped bordered  variant="light">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Role</th>
                        <th scope="col">Store</th>
                        <th scope="col">Username</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userReducer.dataUser.length > 0 ?
                    userReducer.dataUser.map((val, index) => {
                        return <ListUser key={index} user={val} />;
                    })
                    :
                    null
                }
                </tbody>
            </Table>
            {/* <pre>{JSON.stringify(datauser, null, 2)}</pre> */}
            <AddUser isOpen={isOpen} hideModal={hideModal} />
        </div>
    );
}

export default User;
