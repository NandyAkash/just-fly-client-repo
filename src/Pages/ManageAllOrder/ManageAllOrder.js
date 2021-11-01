import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleOrder from '../SingleOrder/SingleOrder';

const ManageAllOrder = () => {
    const [orders,setOrders] = useState();
    useEffect(()=> {
        fetch('http://localhost:5000/manageorder')
        .then(res => res.json())
        .then(data => setOrders(data))
    })
    return (
        <div>
            <div>
            <Container>
            <h1 style={{marginTop:"35px", marginBottom:"30px"}}>All Users Orders and Admin Control</h1>
            <ul style={{marginTop:"35px", marginBottom:"30px"}}>
           {
               orders && orders.map(order =><SingleOrder key = {order._id} order={order}></SingleOrder> )
           }
           </ul>
           </Container>
        </div>
        </div>
    );
};

export default ManageAllOrder;