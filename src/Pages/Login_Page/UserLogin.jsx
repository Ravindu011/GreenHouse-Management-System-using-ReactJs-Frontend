import React, { useState } from 'react';
import './login_page.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UserLogin() {
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
        if (response.data === "Successful User Login") { 
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
    <div>
      <div className="login">
        <h1>User Login</h1>
        <form method="post" onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            required="required"
            value={email}
            onChange={onInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required="required"
            value={password}
            onChange={onInputChange}
          />
          <button type="submit" className="btn btn-primary btn-block btn-large">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
