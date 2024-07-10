import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navigationBar.css'
export default function UserNavigationBar() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
 <Container fluid>
   <Navbar.Brand href="#">AgroPlus User</Navbar.Brand>
   <Navbar.Toggle aria-controls="navbarScroll" />
   <Navbar.Collapse id="navbarScroll">
     <Nav
       className="item"
       style={{ maxHeight: '100px' }}
       navbarScroll
     >
       <Nav.Link href="AdminDashboard">Dashboard</Nav.Link>
       <Nav.Link href="ViewAllPlants">View Plants</Nav.Link>
       <Nav.Link href="addPlant">Add Plant</Nav.Link>
      
     </Nav>
   </Navbar.Collapse>
 </Container>
</Navbar>
</>

  )
}
