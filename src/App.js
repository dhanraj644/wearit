// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'remixicon/fonts/remixicon.css'
import './App.css';
import { Navbar } from './componets/Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import { Home } from './pages/home/Home';
import {Cart }from './pages/cart/Cart'
import {Footer} from'./componets/footer/Footer'
import men_banner from'./componets/Assets/banner_mens.png'
import woman_banner from'./componets/Assets/banner_women.png'
import kid_banner from'./componets/Assets/banner_kids.png';
import { Shopcategary } from './componets/shopcategary/Shopcategary';

import { Productdispaly } from './componets/productdisplay/Productdispaly';

function App() {
  return (
   <>

    <Router>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/man' element={<Shopcategary category="men" banner={men_banner} />}/>
      <Route path='/woman' element={<Shopcategary category="women" banner={woman_banner}/>}/>
      <Route path='/kid' element={<Shopcategary category="kid"  banner={kid_banner} />}/>
      <Route path='/display/:id' element={<Productdispaly/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </Router>

   </>
  );
}

export default App;
