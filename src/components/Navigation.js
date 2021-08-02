import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Form,  Nav, Navbar } from 'react-bootstrap';


const Navigation = () => {
    return (
        <div>
       
            <Navbar className="hello" sticky="top" bg="dark" variant="dark">
    <Navbar.Brand className="bar" href="#home">ArkaMovie</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#movie">Movie</Nav.Link>
     
    </Nav>
    <Form inline ="true">
     
    </Form>
  </Navbar>
        </div>
    )
}

export default Navigation
