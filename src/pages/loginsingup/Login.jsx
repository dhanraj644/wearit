import React from 'react'
import { Link } from 'react-router-dom'
import './loginsignup.css'

export const Login = () => {
  return (
    <>
    <section id='m_login'>
    <div class="contener">
        <h1>Login</h1>
        <form method="post">
            <div class="text_field">
                <input type="email" required placeholder="Email"/>
            </div>
            <div class="text_field">
                <input type="password"required placeholder="Password"/>
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
