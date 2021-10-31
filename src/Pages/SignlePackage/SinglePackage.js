import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams} from "react-router-dom";
import './SinglePackage.css';

const SinglePackage = () => {
    const {id} = useParams();
    const [singlePackage, setSinglePackage] = useState({});
    useEffect(() => {
        fetch(`https://bloodcurdling-chupacabra-21156.herokuapp.com/packages/${id}`)
        .then(res=>res.json())
        .then(data => setSinglePackage(data))
    })
    const {name, picture} = singlePackage;
    return (
        <div className='package-detail'>
            <Container>
           <div>
           <Image src={picture} />
           <h1>{name}</h1>
           </div>
           
           </Container>
        </div>
    );
};

export default SinglePackage;