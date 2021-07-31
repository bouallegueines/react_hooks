import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';


const Navigation = () => {
    return (
        <div>
       
            <Navbar sticky="top" bg="dark" variant="dark">
    <Navbar.Brand className="bar" href="#home">ArkaMovie</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#movie">Movie</Nav.Link>
     
    </Nav>
    <Form inline ="true">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default Navigation
