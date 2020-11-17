import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import ListUser from "../components/listUser";
import AddUser from "../components/addUser";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchUser } from "../store/action/User-action";

function User() {
    const auth = useSelector((state) => state.loginReducer);
    const userReducer = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();

    const [datauser, setDatauser] = useState([]);

    useEffect(() => {
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
    
    if (userReducer.loadingUser) return <div>Loading...</div>;
    return (
        <div className="wraper">
            <Button onClick={showModal}>Add User</Button>
            <Table striped bordered hover variant="light">
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
