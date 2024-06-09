import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {
  let navigate = useNavigate()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    pName: "",
    temp: "",
    humidity: "",
    daysToGrow: "",
    status: ""
  })

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const { pName, temp, humidity, daysToGrow, status } = user

  const onInputChange = (e) => {
    setValue(e.target.value);
    setError('');
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!value.trim()) {
      setError('Enter the Value!');
    } else {
      await axios.post("http://localhost:8080/addNewPlant", user);
      setUser({
        pName: "",
        temp: "",
        humidity: "",
        daysToGrow: "",
        status: ""
      });
      setValue('');
      setError('');
      
    }
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className='text-center m-4'>Register a user</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="pName" className='form-label'>
                Product Name
              </label>
              <input type="text" className="form-control" placeholder='Enter the Plant Name' name='pName' value={pName} onChange={(e) => onInputChange(e)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="temp" className='form-label'>
                Temperature
              </label>
              <input type="number" className="form-control" placeholder='Need Tempreture level' name='temp' value={temp} onChange={(e) => onInputChange(e)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="humidity" className='form-label'>
                Humidity
              </label>
              <input type="number" className="form-control" placeholder='Need Humidity level' name='humidity' value={humidity} onChange={(e) => onInputChange(e)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="daysToGrow" className='form-label'>
                Days to grow
              </label>
              <input type="number" className="form-control" placeholder='How many time to grow (days) ' name='daysToGrow' value={daysToGrow} onChange={(e) => onInputChange(e)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="status" className='form-label'>
                    Status
                </label>
                <select className="form-select" name='status' value={status} onChange={(e) => onInputChange(e)} required>
                    <option value="">Select an option</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Standby">Standby</option>
                </select>
            </div>

            <button className="btn btn-outline-primary" type='submit'>Submit</button>
            <a href="/" className="btn btn-outline-danger mx-2" type='button'>Cancel</a>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  )
}
