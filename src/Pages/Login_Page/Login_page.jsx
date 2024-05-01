import './login_page.css'
import React from 'react'
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { useState } from 'react';
import Register from '../Register_Page/Register';

const Login_page = () => {

    // const [action, setAction] = useState('');

    // const registerLink = () => {
    //     setAction(' active');
    // };


    

  return (
    <div className="">
        <div className="loginForm">
            

        <div className="loginFormContainer">
            <form action="">
                
                    <h1 className='txtLogin'>Login</h1>
                    <div className="inputBox">
                        <input type="text" placeholder='UserName' />
                        <FaUser className='userIcon'/>
                    </div>

                    <div className="inputBox">
                        <input type="password" placeholder='Password' />
                        <FaLock className='userIcon'/>
                    </div>

                    <div className="checkRemember">
                        <label><input type="checkbox"/>Remember me</label>
                        <a href="#" className='remember_me'>Forgot Password?</a>
                    </div>

                    <button className='btnLogin'>
                        Login
                    </button>

                    <div className="registerLink">
                        <p>Don't have an account? <a href='#' className='linkedRegister'>Register</a></p>
                    </div>

                    


            </form>
        </div>


        </div>
    </div>
    
  )
}

export default Login_page