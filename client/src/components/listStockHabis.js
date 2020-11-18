import React from 'react'

const listStockHabis = (props) => {
    console.log(props,'props');
    return (
        <tr>
            <td>{props.stock.product_name}</td>
            <td>{props.stock.stock}</td>
        </tr>
    )
}

export default listStockHabis