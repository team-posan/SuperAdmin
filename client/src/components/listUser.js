import React, { useState } from "react";
import Swal from "sweetalert2";
import EditModal from "../components/editUserModal";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/action/User-action";

function ListUser(props) {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const {
        username,
        password,
        StoreId,
        role,
        id,
        phone_number
    } = props.user;

    console.log(props.user)

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const onDeleteClick = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        })
            .then((result) => {
                if (result.value) {
                    dispatch(deleteUser(props.user));
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                } else {
                    console.log("gajadi delete");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{role}</td>
            <td>{StoreId}</td>
            <td>{username}</td>
            <td>{phone_number}</td>
            <td>
                {
                    role === 'customer' ?
                        null
                        :
                        <button className="add-btn" onClick={showModal} className="btn btn-success">
                            Edit
                    </button>
                }
                {
                    role !== 'admin' ?
                        <button className="delete-btn" onClick={(e) => onDeleteClick(e)} className="btn btn-danger">
                            Delete
                    </button>
                        :
                        null
                }
            </td>
            <EditModal isOpen={isOpen} hideModal={hideModal} dataEdit={props.user} />
        </tr>
    );
}

export default ListUser;
