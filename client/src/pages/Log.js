import React, { useEffect, useState } from 'react'
// import { Table, Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchLog } from "../store/action/Log-action";
import { fetchStore } from "../store/action/Store-action";
import ListLog from "../components/listLog"
import "./Log.css"
import { Table, Tag, Space } from 'antd';
import { css } from '@emotion/css'

const Log = () => {
    const auth = useSelector((state) => state.loginReducer);
    const logReducer = useSelector((state) => state.logReducer)
    const storeReducer = useSelector((state) => state.storeReducer)

    // antd
    const tableCSS = css({
        margin: '20px 60px',
        backgroundColor: 'white',
        '& table': {
          borderCollapse: 'collapse'
        },
        '& thead > tr > th': {
          backgroundColor: '#1E2749',
          color: 'white',
          fontWeight:'bolder'
        }
      });

    const colums =[
        {
            title: 'No',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'Product Name',
            dataIndex: 'product_name',
            key: 'product_name',
        },
        {
            title: 'Store',
            dataIndex: 'Store',
            key: 'StoreId',
        },
        {
            title: 'Status',
            dataIndex: 'payment_status',
            key: 'payment_status',
        }
    ]

    const topOptions = [
        { label: 'topLeft', value: 'topLeft' },
        { label: 'topCenter', value: 'topCenter' },
        { label: 'topRight', value: 'topRight' },
        { label: 'none', value: 'none' },
      ];

    const getStore=(id)=>{
        let filterd = storeReducer.dataStore.filter(val=>val.id == id)
        return filterd[0].store_name
    }

    const dataTable =()=>{
       const newDataTable = logReducer.dataLog.carts.map((val,i)=>{
            return {index:i+1, product_name:val.Product.product_name, Store:getStore(val.Product.StoreId), payment_status:val.payment_status }
        })

        return newDataTable
    }


    const dispatch = useDispatch();

    const [dataLog, setDataLog] = useState([]);
    const [dataStore, setDataStore] = useState([]);
    const [pagination, setPagination] = useState({
        top:'topLeft'
    })

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
        <div className="wraper">
            <Table columns={colums} dataSource={dataTable()} pagination={{ position: [pagination.top] }}   className={tableCSS}/>
            {/* <div>
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
            </div>
            <Table striped bordered variant="light">
                <thead className="color">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Id</th>
                        <th scope="col">Store</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {logReducer.dataLog.carts.map((log, i) => {
                        return <ListLog log={log} key={i} index={i} />;
                    })}
                </tbody>
            </Table> */}

        </div>
    )
}

export default Log
