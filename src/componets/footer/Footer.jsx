import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="footer" style={{marginTop:"30px"}}>
        <div className="footerlogo">
           <Link to="/"><h1>WEAR <span style={{color:'crimson'}}>IT</span></h1></Link> 
        </div>
        <ul className='footer-links'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/man"><li>Man</li></Link>
            <Link to="/woman"><li>Woman</li></Link>
            <Link to="/kid"><li>Kids</li></Link>
        </ul>
        
        <div className="social-icon">
            <div className="social-icon-container">
            <i className="ri-instagram-line"></i>
            </div>
            <div className="social-icon-container">
            <i className="ri-whatsapp-line"></i>
            </div>
            <div className="social-icon-container">
            <i className="ri-twitter-x-line"></i>
            </div>
            <div className="social-icon-container">
            <i className="ri-facebook-line"></i>
            </div>
        </div>
        <div className="footer-copy-rigth">
            <hr />
            <p>Copyright @ 2023- All Rigth reserved</p>
        </div>
    </div>
  )
}
