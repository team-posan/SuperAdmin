import React, { useState } from "react";

import { useDispatch } from "react-redux";

function ListStore(props) {

    const { ProductId, UserId, quantity, payment_status, id, Product } = props.log;

    return (
        <tr>
            <th scope="row">{props.index + 1}</th>
            <td>{Product.product_name}</td>
            <td>{UserId}</td>
            <td>{quantity}</td>
            <td>{payment_status}</td>
        </tr>
    );
}

export default ListStore;
