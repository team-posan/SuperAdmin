import React, { useState } from "react";
import Modal from "./addProduct";
import Swal from "sweetalert2";
import EditProduct from "./editProductModal";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/action/Product-action";
import { fetchProduct } from "../store/action/Product-action";

function ListProduct(props) {
  const dispatch = useDispatch();
  const { product_name, price, image_url, stock, StoreId, id } = props.product;
  const [isOpen, setIsOpen] = useState(false);
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
          dispatch(deleteProduct(props.product));
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          dispatch(fetchProduct());
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
      <td>{product_name}</td>
      <td>{price}</td>
      <td>{image_url}</td>
      <td>{stock}</td>
      <td>{StoreId}</td>
      <td>
        <button onClick={showModal} className="btn btn-success">
          Edit
        </button>
        <button onClick={(e) => onDeleteClick(e)} className="btn btn-danger">
          Delete
        </button>
      </td>
      {/* <Modal isOpen={isOpen} hideModal={hideModal} /> */}
      <EditProduct
        isOpen={isOpen}
        hideModal={hideModal}
        data={props.product}
      />
    </tr>
  );
}

export default ListProduct;
