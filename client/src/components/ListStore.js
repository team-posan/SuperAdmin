import React, { useState } from "react";
import SweetAlert from "sweetalert2-react";
import Swal from 'sweetalert2'
import EditModal from "../components/editStoreModal";
import { useDispatch } from 'react-redux'
import { deleteStore } from '../store/action/Store-action'

function ListStore(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch()
  const { store_name, store_address } = props.store
  const showAlert = () => {
    setAlert(true);
  };

  const hideAlert = () => {
    setAlert(false);
  };
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };


  const onDeleteClick=(e)=>{
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        dispatch(deleteStore(props.store))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }else{
        console.log('gajadi delete')
      }
    })
    .catch(err=>{
      console.log(err)

    })
  }

  return (
    <tr>
      <th scope="row">1</th>
      <td>{store_name}</td>
      <td>{store_address}</td>
      <td>
        <button onClick={showModal} className="btn btn-success">Edit</button>
        <button onClick={(e)=>onDeleteClick(e)} className="btn btn-danger">Delete</button>
      </td>
      {/* <SweetAlert
        show={alert}
        title="DELETE STORE"
        text="Are you sure"
        onConfirm={hideAlert}
      /> */}
      <EditModal isOpen={isOpen} hideModal={hideModal} dataEdit={props.store}/>
    </tr>
  );
}

export default ListStore;
