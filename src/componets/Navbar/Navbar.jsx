import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

// import {Link} from 'react-router-dom'


export const Navbar = () => {

  const show=()=>{
   var a=document.getElementById('Toggel')
   a.style.display='block';
  }
  const hide=()=>{
    var a=document.getElementById('Toggel')
   a.style.display='none';
  }
  return (
 <nav className='sticky-top'>
  <div className="logo">
    <h2>WEAR <span style={{color:'crimson'}}>IT</span></h2>
  </div>
  
  <div className="list" >
  
  <Link to="/"><li>Home</li></Link>
  <Link to="/man"><li>Man</li></Link>
  <Link to="/woman"><li>Woman</li></Link>
  <Link to="/kid"><li>Kids</li></Link>

  </div>

  <div className="icon">
  <i className="ri-search-line"></i>
  <Link to="cart"> <i className="ri-shopping-cart-line"></i></Link>
   <button id='loging' className='btn ' style={{backgroundColor:'crimson',color:'#fff'}}> LOGIN</button>
  <i className="ri-bar-chart-horizontal-fill" id='bar'onClick={show}></i>
  </div>

  <div className="barclick" id='Toggel'>
  <div className="cross-icon" onClick={hide}>
  <i className="ri-close-line"></i>
  </div>
  <hr  className='hr-line' />
  <div className="login-sin">
  <button className='btn ' style={{backgroundColor:'crimson',color:'#fff'}}> LOGIN</button>
  <button className='btn ' style={{backgroundColor:'white',color:'black'}}> SIGNUP</button>
  <hr  className='hr-line' />

  </div>
  <div className="ll_list" >
  <Link to="/"><li onClick={hide}>Home</li></Link>
  <hr  className='hr-line'/>
  <Link to="/man"><li onClick={hide}>Man</li></Link>
  <hr className='hr-line' />
  <Link to="/woman"><li onClick={hide}>Woman</li></Link>
  <hr className='hr-line' />
  <Link to="/kid"><li onClick={hide}>Kids</li></Link>
  <hr className='hr-line' />

  </div>
  </div>
 </nav>
 
  )
} 
