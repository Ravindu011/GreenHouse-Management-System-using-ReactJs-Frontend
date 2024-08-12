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
         {/* <Navbar expand="lg" className="bg-body-tertiary">
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
            <Nav.Link href="addPlant">Add Plant</Nav.Link>
            <NavDropdown title="User Control" id="navbarScrollingDropdown">
              <NavDropdown.Item href="RegisterUser">Register New User</NavDropdown.Item>
              <NavDropdown.Item href="viewUsers">View Users</NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

<nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <div className="logo"></div>
                {/* <img src="images/A+logo.png" alt="" width="40" height="40" > */}
            </a>
            <a class="navbar-brand" href="#"><strong>Agro</strong><sup>+</sup></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="AdminDashboard">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="ViewAllPlants">View Plants</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="addPlant">Add Plant</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="userAct">User Activities</a>
                    </li>
                    {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                            User Control
                        </a> */}
                        <NavDropdown title="User Control" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li>
                          <NavDropdown.Item class="dropdown-item" href="RegisterUser">Register New User</NavDropdown.Item>
                          <NavDropdown.Item class="dropdown-item" href="viewUsers">View Users</NavDropdown.Item>
                          </li>
                            
                        </NavDropdown>
                    {/* </li> */}
                </ul>
            </div>

            <a class="navbar-brand" href="/">Log Out</a>
            
        </div>
    </nav>

    </>

  )
}
