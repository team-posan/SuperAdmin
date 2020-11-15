import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
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

  if (storeReducer.loadingStore) return <div>Loading...</div>;
  return (
    <div className="wraper">
      <Button onClick={showModal}>Add Store</Button>
      <Table striped bordered hover variant="light">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Store Name</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {storeReducer.dataStore.map((val, index) => {
            return <ListStore key={index} store={val} />;
          })}
        </tbody>
      </Table>
      <AddStore isOpen={isOpen} hideModal={hideModal} />
    </div>
  );
}

export default Store;
