import React from 'react'

const option = (props) => {
    const{store_name ,id} = props.store
    return (
    <option value={id}>{store_name}</option>
    )
}

export default option
