import React, { useEffect, useState } from "react";
import { Button, Table, Spinner } from "react-bootstrap";
import ListStore from "../components/ListStore";
import AddStore from "../components/addStore";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchStore } from "../store/action/Store-action";

function Store() {
  const auth = useSelector((state) => state.loginReducer);
  const storeReducer = useSelector((state) => state.storeReducer);

  const dispatch = useDispatch();

  const [dataStore, setDataStore] = useState([]);

  useEffect(() => {
    dispatch(fetchStore());
    setDataStore(storeReducer);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  if (!auth.loginStatus) return <Redirect to={"/login"} />;

  if (storeReducer.loadingStore) return <Spinner animation="border" />;
  return (
    <div className="wraper">
      <h1>List Store</h1>
      <Button className="add-btn" onClick={showModal}>Add Store</Button>
      <Table striped bordered variant="light" responsive="md" size="md">
        <thead className="color" center>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Store Name</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {storeReducer.dataStore.map((val, index) => {
            return <ListStore key={index} store={val} index={index} />;
          })}
        </tbody>
      </Table>
      <AddStore isOpen={isOpen} hideModal={hideModal} />
    </div>
  );
}

export default Store;
