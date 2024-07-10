import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navigationBar.css'
export default function UserNavigationBar() {
  return (
    <>
 <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <div className="logo"></div>
                {/* <img src="images/A+logo.png" alt="" width="40" height="40" > */}
            </a>
            <a class="navbar-brand" href="#">Greenhouse Admin</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="UserDashboard">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="UserViewPlants">View Plants</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="UserAddPlants">Add Plant</a>
                    </li>
                    
                </ul>
            </div>

            <a class="navbar-brand" href="/">Log Out</a>
            
        </div>
    </nav>

    </>

  )
}
