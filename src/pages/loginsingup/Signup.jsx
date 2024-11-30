import React, { useState } from 'react';
import './loginsignup.css'
import { Link } from 'react-router-dom'
export const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
      });
    
      const [message, setMessage] = useState('');
    
      // Handle input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        if (!formData.agreeToTerms) {
          setMessage('You must agree to the terms and conditions.');
          return;
        }
    
        try {
          const response = await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              password: formData.password,
            }),
          });
    
          if (response.ok) {
            setMessage('Signup successful! Redirecting...');
            setFormData({ name: '', email: '', password: '', agreeToTerms: false });
          } else {
            const errorData = await response.json();
            setMessage(errorData.error || 'Signup failed!');
          }
        } catch (error) {
          console.error('Error during signup:', error);
          setMessage('An error occurred. Please try again.');
        }
      };
    
  return (
    <div className="singup">
        <div className="singup-container">
            <h1>Sing Up</h1>
            <form action="">
            <div className="singup-field">
                <input   type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                   required />
                <input 
                type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required/>
                <input 
                 type="password"
                 name="password"
                 placeholder="Password"
                 value={formData.password}
                 onChange={handleChange}
                 required
                />
            </div>
            <button>Continue</button>
            </form>
            <p className='login-option'>Already have  an account?  <Link to="/login"><span>Login</span></Link></p>

            <div className="agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing, i agree to the terms of use & privacy</p>
            </div>
        </div>
    </div>
  )
}
