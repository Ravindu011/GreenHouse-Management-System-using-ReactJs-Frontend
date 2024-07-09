import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import './navigationBar.css'


export default function NavigationBar() {
  return (
    <>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">GreenHouse Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="item"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="AdminDashboard">Dashboard</Nav.Link>
            <Nav.Link href="ViewAllPlants">View Plants</Nav.Link>
            <Nav.Link href="ViewAllPlants">Add Plant</Nav.Link>
            <NavDropdown title="User Control" id="navbarScrollingDropdown">
              <NavDropdown.Item href="RegisterUser">Register New User</NavDropdown.Item>
              <NavDropdown.Item href="viewUsers">View Users</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#" disabled>
              System Guild
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

  )
}
