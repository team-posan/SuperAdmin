import React, { useState } from "react";
import Modal from "./addProduct";
import Stocks from "./stock";

function ListProduct() {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const showModalEdit = () => {
    setIsOpenEdit(true);
  };

  const hideModalEdit = () => {
    setIsOpenEdit(false);
  };
  return (
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Otto</td>
      <td>10</td>
      <td>
        <button onClick={showModalEdit}>Add</button>
        <button onClick={showModal}>Edit</button>
        <button onClick={showModalEdit}>Delete</button>
      </td>
      <Modal isOpen={isOpen} hideModal={hideModal} />
      <Stocks isOpenEdit={isOpenEdit} hideModalEdit={hideModalEdit} />
    </tr>
  );
}

export default ListProduct;
