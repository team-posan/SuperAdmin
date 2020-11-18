import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import EditProduct from "./editProductModal";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/action/Product-action";
import { Button } from 'react-bootstrap'
import "./ListProduct.css"
import { fetchStore } from '../store/action/Store-action'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


function ListProduct(props) {

  //redux
  const dispatch = useDispatch();

  // antd
  const { product_name, price, image_url, stock, StoreId, id } = props.product;


  // reducers
  const storeReducer = useSelector((state) => state.storeReducer);
  const auth = useSelector((state) => state.loginReducer);
  //modal
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchStore())
  }, [])

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
        } else {
          console.log("gajadi delete");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterStore = () => {
    let filterd = storeReducer.dataStore.filter(val => val.id == StoreId)
    return filterd[0].store_name
  }

  if (!auth.loginStatus) return <Redirect to={"/login"} />;

  if (storeReducer.loadingStore) return <div>Loading...</div>;

  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{product_name}
      </td>
      <td>{price}</td>
      <td style={{ maxWidth: '600px', overflow: 'hidden' }}><a style={{ color: 'black' }} href={`${image_url}`} target='_blank'>View Image Here</a></td>
      <td>{stock}</td>
      <td>{filterStore()}</td>
      <td>
        <Button onClick={showModal} className="add-btn">
          Edit
        </Button>
        <Button className="delete-btn" onClick={(e) => onDeleteClick(e)} >
          Delete
        </Button>
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
