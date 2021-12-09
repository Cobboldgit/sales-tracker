import React from 'react'

function Customers(props) {
    return (
        <div>
            <p>{props.customer.name}</p>
            <p>{props.customer.phoneNumber}</p>
        </div>
    )
}

export default Customers
