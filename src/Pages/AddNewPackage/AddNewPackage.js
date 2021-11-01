import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';

const AddNewPackage = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [duration, setDuration] = useState('');
    const [picture, setPicture] = useState('');
    const [district, setDistrict] = useState('');
    const [description, setDescription] = useState('');

    const addOfferPackage = () => {
        const newOfferPackage = {name, cost, duration, picture, district};
        fetch('https://bloodcurdling-chupacabra-21156.herokuapp.com/packages',{
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newOfferPackage)
        })
        .then(res=> res.json())
        .catch(err => console.log(err));
        alert('Your Package has been added');
    }

    return (
        <div>
            <h1 className="mx-4 my-4">Add a New Offer Package</h1>
            <Form className="mx-4 my-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Offer Package Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={cost} onChange={(e)=> setCost(e.target.value)} type="text" placeholder="Offer Package Cost" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={duration} onChange={(e)=> setDuration(e.target.value)} type="text" placeholder="Offer Package Duration" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={picture} onChange={(e)=> setPicture(e.target.value)} type="text" placeholder="Offer Package Image URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={district} onChange={(e)=> setDistrict(e.target.value)} type="text" placeholder="Offer Package District" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Offer Package Description" />
                </Form.Group>
                <Button onClick={addOfferPackage} className="mx-4 my-4" variant="primary" type="submit">
                    Add Offer Package
                </Button>
            </Form>
        </div>
    );
};

export default AddNewPackage;