import React, { useState } from 'react';
import './login_page.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function LoginPage() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState('');

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Enter the Value!');
    } else {
      try {
        const response = await axios.post("http://localhost:8080/login", user);
        if (response.data == "Successful login") { // Assuming the server sends a success property
          navigate("/AdminDashboard"); // Navigate to the Dashboard
        } else {
          setError('Invalid email or password');
        }
      } catch (err) {
        setError('Error occurred during login. Please try again.');
      }
    }
  };

  return (
    

    <div className='bg'>
      {/* <div class="bg-image"><img src="images/plant.png" alt=""></div> */}
    
    <div class="bg-text">

            <div className='logo'>
                {/* <img class="logo" src="images/A+logo.png" alt="Greenhouse Management System"> */}
            </div>

            <h2 class="mt-4">Admin Login</h2>


            <form method="post" onSubmit={onSubmit}>
                
                <div class="form-group">

                    <label for="email">Email</label>

                    <input
                    class="form-control"
                    type="text"
                    name="email"
                    placeholder="Email"
                    required="required"
                    value={email}
                    onChange={onInputChange}
                    />
                </div>


                <div class="form-group">

                    <label for="email">Password</label>

                    <input
                    class="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required="required"
                    value={password}
                    onChange={onInputChange}
                    />
                </div>
                
                <div class="form-group">
                  <br />
                    <button type="submit" class="btn btn-success">Login</button>
                    
                </div>

                <div class="form-group">
                    <a href="/" class="text-gray-600">Login as User?</a>
                </div>
            </form>


          <div class="text-danger mt-2" id="error-message" >
           {error && <p>{error}</p>} 
          </div>
          
      </div>
    </div>
  );
}
