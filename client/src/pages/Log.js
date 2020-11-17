import React, { useEffect, useState } from 'react'
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchLog } from "../store/action/Log-action";
import ListLog from "../components/listLog"


const Log = () => {
    const auth = useSelector((state) => state.loginReducer);
    const logReducer = useSelector((state) => state.logReducer)

    const dispatch = useDispatch();

    const [dataLog, setDataLog] = useState([]);

    useEffect(() => {
        dispatch(fetchLog());
        setDataLog(logReducer);
    }, []);

    console.log(logReducer, 'kjjhjh');

    if (!auth.loginStatus) return <Redirect to={"/login"} />;
    if (logReducer.loadingLog) return <div>Loading...</div>;
    return (
        <div>
            <Table striped bordered hover variant="light">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product ID</th>
                        <th scope="col">User ID</th>
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
            {/* <pre>{JSON.stringify(dataLog, null, 2)}</pre> */}
        </div>
    )
}

export default Log
