import React from 'react'
import { Link } from 'react-router-dom'
import './loginsignup.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // For simplicity, use hardcoded credentials (you can replace with API or backend check)
    const validUsername = 'admin';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
    <section id='m_login'>
    <div class="contener">
        <h1>Login</h1>
        <form method="post">
            <div class="text_field">
                <input type="email" required placeholder="Email"     value={username}
            onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div class="text_field">
                <input type="password"required placeholder="Password"    value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class="pass"><a href="#">Forget password ?</a></div>
            <input type="submit" value="Login"/>
            <div class="signup_link">
           Dont't have an account? <Link to="/signup">Signup</Link>
        </div>
        </form>
    </div>
    </section>
    </>
  )
}
