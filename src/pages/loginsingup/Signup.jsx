import React from 'react'
import './loginsignup.css'
import { Link } from 'react-router-dom'
export const Signup = () => {
  return (
    <div className="singup">
        <div className="singup-container">
            <h1>Sing Up</h1>

            <div className="singup-field">
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Email Address'/>
                <input type="text" placeholder='Password'/>
            </div>
            <button>Continue</button>

            <p className='login-option'>Already have  an account?  <Link to="/login"><span>Login</span></Link></p>

            <div className="agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing, i agree to the terms of use & privacy</p>
            </div>
        </div>
    </div>
  )
}
