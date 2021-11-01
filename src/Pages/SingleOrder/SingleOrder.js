import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';

const SingleOrder = (props) => {
    const [orders, setOrders] = useState();
    const { userName, userEmail, selectedPackageId, selectedPackage, packagePrice } = props.order;
    const handleOrder = id => {
        const confirmDelete = window.confirm('Are you sure to delete it?');
        if(confirmDelete) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount >0) {
                    alert('deleted successfully');
                    const remainingOrders = orders.filter(remainorder => remainorder.selectedPackageId !== id);
                    setOrders(remainingOrders);
                }
            })
        }
    }
    return (
        <div>
            <li style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <h2>{userName}</h2>
                <h4>{userEmail}</h4>
                <h5>{selectedPackage}</h5>     
                <h3>{packagePrice}</h3> 
                <Badge bg="primary">Pending</Badge>
                <button onClick= {() => handleOrder(selectedPackageId)}>X</button> 
                
            </li>
               
        </div>
    );
};

export default SingleOrder;