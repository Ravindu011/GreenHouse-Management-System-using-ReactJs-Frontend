import React from 'react'
import './register.css'
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Register() {


  return (
    <div className='RegistrationForm'>
        <div className="registerFormContainer">
            <form action="">
                    <h1 className='txtLogin'>Register</h1>

                    <div className="inputBox">
                        <input type="text" placeholder='UserName' />
                        <FaUser className='userIcon'/>
                    </div>

                    <div className="inputBox">
                        <input type="email" placeholder='Email Address' />
                        <FaEnvelope className='userIcon'/>
                    </div>

                    <div className="inputBox">
                        <input type="text" placeholder='Phone No' />
                        <FaPhone className='userIcon'/>
                    </div>

                    <div className="inputBox">
                        <input type="text" placeholder='Location' />
                        <FaLocationDot className='userIcon'/>
                    </div>

                    <div className="inputBox">
                        <input type="password" placeholder='Password' />
                        <FaLock className='userIcon'/>
                    </div>

                    <div className="checkRemember">
                        <label><input type="checkbox"/>I agree to the terms & conditions</label>
                    </div>

                    <button className='btnRegister'>
                        Register
                    </button>

                    <div className="loginLink">
                        <p>Already have an account? <a href='#' className='linkedLogin'>Login</a></p>
                    </div>
            </form>
        </div>


    </div>
  )
}
