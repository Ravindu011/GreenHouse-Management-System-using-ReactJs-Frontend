import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegisterUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    type: "",
    username: ""
  });

  const [errors, setErrors] = useState({});

  const { email, password, type, username } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!username.trim()) formErrors.username = 'Username is required';
    if (!type.trim()) formErrors.type = 'Type is required';
    if (!email.trim()) formErrors.email = 'Email is required';
    if (!password.trim()) formErrors.password = 'Password is required';

    return formErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      await axios.post("http://localhost:8080/adduser", user);
      setUser({
        email: "",
        password: "",
        type: "",
        username: ""
      });
      navigate('/');
    }
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className='text-center m-4'>Register a User</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className='form-label'>
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder='Enter the Username'
                name='username'
                value={username}
                onChange={onInputChange}
                required
              />
              {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="type" className='form-label'>
                Type
              </label>
              <input
                type="text"
                className="form-control"
                placeholder='User Type'
                name='type'
                value={type}
                onChange={onInputChange}
                required
              />
              {errors.type && <p style={{ color: 'red' }}>{errors.type}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className='form-label'>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder='Email'
                name='email'
                value={email}
                onChange={onInputChange}
                required
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className='form-label'>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder='Password'
                name='password'
                value={password}
                onChange={onInputChange}
                required
              />
              {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <button className="btn btn-outline-primary" type='submit'>Submit</button>
            <a href="/AdminDashboard" className="btn btn-outline-danger mx-2" type='button'>Cancel</a>
          </form>
        </div>
      </div>
    </div>
  )
}
