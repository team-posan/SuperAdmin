import React, { useEffect, useState } from 'react'
import { Table, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { fetchLog } from "../store/action/Log-action";
import ListLog from "../components/listLog"


const Log = () => {
    const auth = useSelector((state) => state.loginReducer);
    const logReducer = useSelector((state) => state.logReducer)

    const dispatch = useDispatch();
    const params = useParams()

    const [dataLog, setDataLog] = useState([]);

    useEffect(() => {
        console.log('params', params)
        dispatch(fetchLog());
        setDataLog(logReducer);
    }, []);

    console.log(logReducer, 'kjjhjh');

    if (!auth.loginStatus) return <Redirect to={"/login"} />;
    if (logReducer.loadingLog) return <Spinner animation="border" />;
    return (
        <div>
            <Table striped bordered  variant="light">
                <thead className="color">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">User ID</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {logReducer.dataLog.carts.map((log, i) => {
                        console.log('>>>', log.Product.StoreId, params.StoreId)
                        if (String(log.Product.StoreId) === params.StoreId) {
                            return <ListLog log={log} key={i} index={i} />;
                        }
                    })}
                </tbody>
            </Table>
            {/* <pre>{JSON.stringify(dataLog, null, 2)}</pre> */}
        </div>
    )
}

export default Log
