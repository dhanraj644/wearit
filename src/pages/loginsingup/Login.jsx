import React from 'react'
import { Link } from 'react-router-dom'
import './loginsignup.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => { 

  return (
    <>
     <div className="singup">
        <div className="singup-container">
            <h1>Login Up</h1>

            <div className="singup-field">
                <input type="text" placeholder='Email Address'/>
                <input type="text" placeholder='Password'/>
            </div>
            <button>Continue</button>

            <p className='login-option'>Already have  an account?   <Link to="/signup"><span>Signup </span></Link></p>

        </div>
    </div>
    </>
  )
}
