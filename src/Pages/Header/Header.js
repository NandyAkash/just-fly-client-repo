import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Banner from '../Banner/Banner';

const Header = () => {
    const {user,logOut} = useAuth();
    
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Just Fly</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/packages">Packages</Nav.Link>
                </Nav>
                <Nav>

                <Navbar.Collapse className="justify-content-end">
                {user?.email?
                   ( 
                    <>
                    
                    <Nav.Link as={Link} to="/orders">My Orders</Nav.Link>
                    {user.email==="nandyak81@gmail.com" && (
                        <>
                            <Nav.Link as={Link} to="/manageorder">Manage All Order</Nav.Link>
                    <Nav.Link as={Link} to="/addpackage">Add New Package</Nav.Link>
                        </>
                    ) } 
                    
                    <Button style={{'margin-right':'5px'}}variant='primary' onClick={logOut}>Logout</Button>
                    <Navbar.Text>
                    Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    </>
                   )
                   :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                }
                
                

                </Navbar.Collapse>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <Banner></Banner>
        </div>
        
    );
}

export default Header;