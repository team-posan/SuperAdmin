import React, { useState } from "react";
import SweetAlert from "sweetalert2-react";
import EditModal from "../components/editStoreModal";

function ListStore() {
  const [isOpen, setIsOpen] = useState(false);
  const [alert, setAlert] = useState(false);
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
  return (
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>
        <button onClick={showModal}>Edit</button>
        <button onClick={showAlert}>Delete</button>
      </td>
      <SweetAlert
        show={alert}
        title="DELETE STORE"
        text="Are you sure"
        onConfirm={hideAlert}
      />
      <EditModal isOpen={isOpen} hideModal={hideModal} />
    </tr>
  );
}

export default ListStore;
