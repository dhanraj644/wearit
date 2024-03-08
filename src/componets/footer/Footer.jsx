import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <div className="footer" style={{marginTop:"30px"}}>
        <div className="footerlogo">
            <h1>WEARIT</h1>
        </div>
        <ul className='footer-links'>
            <li>Home</li>
            <li>Products</li>
            <li>Contact us</li>
            <li>Service</li>
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
