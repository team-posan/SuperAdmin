import React, { useState } from "react";
import Swal from "sweetalert2";
import EditModal from "../components/editStoreModal";
import { useDispatch } from "react-redux";
import { deleteStore } from "../store/action/Store-action";
import { useHistory } from "react-router";

function ListStore(props) {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory()
  const dispatch = useDispatch();
  const { store_name, store_address, id } = props.store;

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const showtransaction = () => {
    const StoreId = id
    history.push(`${id}/transaction`, {
      store: props.store
    })
  }

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
          dispatch(deleteStore(props.store));
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
      <td>{store_name}</td>
      <td>{store_address}</td>
      <td>
      <button onClick={showtransaction} className="btn btn-success">
          See All transaction
        </button>
      </td>
      <td>
        <button onClick={showModal} className="btn btn-success">
          Edit
        </button>
        <button onClick={(e) => onDeleteClick(e)} className="btn btn-danger">
          Delete
        </button>
      </td>
      <EditModal isOpen={isOpen} hideModal={hideModal} dataEdit={props.store} />
    </tr>
  );
}

export default ListStore;
