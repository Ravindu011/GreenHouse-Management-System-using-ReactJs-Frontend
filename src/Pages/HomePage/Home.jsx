import { useState } from "react";
import './home.css'
import React from 'react'
import Login_page from "../Login_Page/Login_page";
import Register from "../Register_Page/Register";

export default function Home() {

    const [activeComponent, setActiveComponent] = useState('login');

  const showLogin = () => {
    setActiveComponent('login');
  };

  const showRegister = () => {
    setActiveComponent('register');
  };

  const scrollNext = () => {
    setActiveComponent(activeComponent === 'login' ? 'register' : 'login');
  };

  const scrollPrev = () => {
    setActiveComponent(activeComponent === 'login' ? 'register' : 'login');
  };
  return (
    <div className="home">
      <div className="carousel">
        {activeComponent === 'login' && <Login_page/>}
        {activeComponent === 'register' && <Register/>}
      </div>
      <div className="navigation">
        <button onClick={showLogin}>Login</button>
        <button onClick={showRegister}>Register</button>
      </div>
    </div>
  )
}
