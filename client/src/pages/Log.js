import React, { useEffect, useState } from 'react'
import { Table, Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchLog } from "../store/action/Log-action";
import { fetchStore } from "../store/action/Store-action";
import ListLog from "../components/listLog"

const Log = () => {
    const auth = useSelector((state) => state.loginReducer);
    const logReducer = useSelector((state) => state.logReducer)
    const storeReducer = useSelector((state) => state.storeReducer)


    const dispatch = useDispatch();

    const [dataLog, setDataLog] = useState([]);
    const [dataStore, setDataStore] = useState([]);

    const [filtered, setFiltered] = useState('')
    // console.log(dataLog);
    useEffect(() => {
        dispatch(fetchLog());
        setDataLog(logReducer)
    }, [dataLog]);

    useEffect(() => {
        dispatch(fetchStore());
        setDataStore(storeReducer)
    }, [dataStore]);

    const onChangeHandler = (e) => {
        setFiltered(e.target.value)
    }
    // const filteredStore = dataLog.carts.filter(store => {
    //     return store.id.includes(filtered)
    // })

    if (!auth.loginStatus) return <Redirect to={"/login"} />;
    if (logReducer.loadingLog) return <div>Loading...</div>;
    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Store"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <p>{filtered}</p>
            <Table striped bordered hover responsive>
                <thead className="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Store Id</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {logReducer.dataLog.carts.map((log, i) => {
                        return <ListLog log={log} key={i} />;
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Log
