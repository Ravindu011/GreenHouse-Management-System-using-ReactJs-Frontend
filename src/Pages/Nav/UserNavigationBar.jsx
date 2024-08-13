import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import './navigationBar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function UserNavigationBar() {
  const { username } = useContext(UserContext); // Access username from context

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="logo"></div>
          {/* <img src="images/A+logo.png" alt="" width="40" height="40" /> */}
        </a>
        <a className="navbar-brand" href="#">Greenhouse Admin</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/UserDashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/UserViewPlants">View Plants</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/UserAddPlants">Add Plant</a>
            </li>
            <NavDropdown title="Notes" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <NavDropdown.Item class="dropdown-item" href="UserNoteBook">Add Note</NavDropdown.Item>
                  <NavDropdown.Item class="dropdown-item" href="UserViewNote">View Notes</NavDropdown.Item>
                </li>
                            
            </NavDropdown>
          </ul>
        </div>
        <div className="ms-auto">
          {username && <span className="navbar-text text-white me-3">User: {username}</span>}
          <a className="navbar-brand" href="/">  Log Out</a>
        </div>
      </div>
    </nav>
  );
}
