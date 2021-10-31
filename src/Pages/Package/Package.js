import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css';


const Package = (props) => {
    const {picture,name,_id, duration, cost} = props.data;

    
    return (
        <div className="package-container">
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Duration: {duration} days
                    </Card.Text>
                    <Card.Text>
                    Cost: {cost} Tk
                    </Card.Text>
                    <Link to={`/packages/${_id}`}>
                        <Button  variant="primary">Get the Offer</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Package;