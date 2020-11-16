import React from 'react'

const option = (props) => {
    const{store_name} = props.store
    return (
    <option>{store_name}</option>
    )
}

export default option
