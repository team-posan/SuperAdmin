import React, { useState } from "react";
import Swal from "sweetalert2";
import EditModal from "../components/editUserModal";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/action/User-action";
import "./ListStore.css"
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


    console.log(props)

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
            <td>{username}</td>
            <td>{role}</td>
            <td>{StoreId}</td>
            <td>
                {
                    role === 'customer' ?
                        null
                        :
                        <button  onClick={showModal} className="btn btn-success add-btn" style={{borderRadius:'3px'}}>
                            Edit
                    </button>
                }
                {
                    role !== 'admin' ?
                        <button onClick={(e) => onDeleteClick(e)} className="btn btn-danger delete-btn" style={{borderRadius:'3px'}}>
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
