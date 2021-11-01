import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';

const Orders = () => {
    const {user} = useAuth();
    const {uid} = user;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${uid}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[orders])
    
    
    return (
        <div>
            <Container>
            <h1 style={{marginTop:"35px", marginBottom:"30px"}}>Your Orders</h1>
            <h3 style={{marginTop:"20px", marginBottom:"10px"}}>{user.displayName}</h3> 
            <ul style={{padding:"40px 151px",marginTop:"20px", marginBottom:"10px"}}> 
           {
               orders && orders.map(order =><SingleOrder key = {order._id} order={order}></SingleOrder> )
           }
           </ul>
           </Container>
        </div>
    );
};

export default Orders;