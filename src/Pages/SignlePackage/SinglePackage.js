import React, { useEffect, useState } from 'react';
import { Container, Image, Button, Form } from 'react-bootstrap';
import { useParams,useHistory} from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import './SinglePackage.css';

const SinglePackage = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [singlePackage, setSinglePackage] = useState({});
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const history = useHistory();
    useEffect(() => {
        fetch(`https://bloodcurdling-chupacabra-21156.herokuapp.com/packages/${id}`)
        .then(res=>res.json())
        .then(data => setSinglePackage(data))
    },[])
    const {name, picture, duration, cost, description} = singlePackage;
    const placeOrder = () =>{
            const userId = user.uid;
            const userName = user.displayName;
            const userEmail = user.email;
            const userAddress = address;
            const userNumber = number;
            const selectedPackageId = id;
            const selectedPackage = name;
            const packagePrice = cost;
            const orderPackage = {userId, userName, userEmail, userAddress, userNumber, selectedPackageId, selectedPackage, packagePrice};
            fetch('http://localhost:5000/orders',{
                method:"POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(orderPackage)
            })
            .then(res=> res.json())
            .catch(err => console.log(err));
            alert('Your Order Have been Placed');
            history.push('/home');
    }
    
    return (
        <div className='package-detail'>
            <Container>
           <div>
           <Image src={picture} />
           <h1>{name}</h1>
           <p style={{padding:"20px"}}>{description}</p>
           <p>Tour Duration{duration} days</p>
           <p>{cost} Tk</p>
           </div>
           <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control value={number} onChange={(e) => setNumber(e.target.value)} type="number" placeholder="018*********" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Present Address</Form.Label>
                    <Form.Control value={address} onChange={(e) => setAddress(e.target.value)} as="textarea" rows={3} placeholder="Address" />
                </Form.Group>
            </Form>
           <Button onClick={placeOrder}>Confirm order</Button>
           </Container>
        </div>
    );
};

export default SinglePackage;