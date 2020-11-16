import React, { useState } from "react";

import { useDispatch } from "react-redux";

function ListStore(props) {

    const { ProductId, UserId, quantity, payment_status, id } = props.log;

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{ProductId}</td>
            <td>{UserId}</td>
            <td>{quantity}</td>
            <td>{payment_status}</td>
        </tr>
    );
}

export default ListStore;
