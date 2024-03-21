import React from 'react'
import './loginsignup.css'

export const Signup = () => {
  return (
   <>
    <div class="contener">
        <h1>Signup</h1>
        <form method="post">
            <div class="text_field">
                <input type="email" required placeholder="Email"/>
            </div>
            <div class="text_field">
                <input type="password"required placeholder="Create Password"/>
            </div>
            <div class="text_field">
                <input type="password"required placeholder="Cunform Password"/>
            </div>
            {/* <div class="pass"><a href="#">Forget password ?</a></div> */}
            <input type="submit" value="signup"/>
            <div class="signup_link">
           Already have a account? <a href="./index1.html">Login</a>
        </div>
        </form>
    </div>
   </>
  )
}
