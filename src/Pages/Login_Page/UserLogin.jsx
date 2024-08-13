// src/components/UserLogin.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../UserContext';
const UserLogin = () => {
  const { setUsername } = useContext(UserContext);
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
        const response = await axios.post("http://localhost:8080/userlogin", user);
        if (response.data.message.startsWith('Welcome')) {
          const username = response.data.message.split(', ')[1];
          setUsername(username);
          localStorage.setItem(username, 'Logged IN'); // Save username to localStorage
          navigate("/UserDashboard");
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
      <div className="bg-text">
        <div className='logo'>
          {/* <img className="logo" src="images/A+logo.png" alt="AgroPlus Logo" /> */}
        </div>
        <h2 className="mt-4">User Login</h2>
        <form method="post" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <br />
            <button type="submit" className="btn btn-success">Login</button>
          </div>
          <div className="form-group">
            <a href="/AdminLogin" className="text-gray-600">Login as Admin?</a>
          </div>
        </form>
        <div className="text-danger mt-2" id="error-message">
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
