import React from 'react'
import {Cardtwo} from '../../componets/Cardsecond/Cardtwo'
import { Products } from '../../componets/products/Products'
import { Newcollection } from '../../componets/newcollection/Newcollection'
import { Bannertwo } from '../../componets/bannertwo/Bannertwo'

export const Home = () => {
  return (
    <>
    
<div id="demo" className="carousel slide" data-bs-ride="carousel">


<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div className="carousel-inner">
  <div className="carousel-item active">
    <img src="https://marketplace.canva.com/EAFuUVuQu98/1/0/1600w/canva-yellow-pink-bold-fashion-sale-landscape-banner-XgQnSpGbsnQ.jpg" alt="Los Angeles" className="d-block" style={{width:"100%"}} />
  </div>
  <div className="carousel-item">
    <img src="https://marketplace.canva.com/EAFcKDjZQKE/1/0/1600w/canva-orange-modern-ramadan-sale-event-promotion-banner-z3Zks3bh_2g.jpg" alt="Chicago" className="d-block"style={{width:"100%"}}/>
  </div>
  <div className="carousel-item">
    <img src="https://marketplace.canva.com/EAFED4mfw94/1/0/1600w/canva-yellow-white-modern-special-discount-banner-0J53SvmhoiY.jpg" alt="New York" className="d-block"style={{width:"100%"}}/>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>

   <Bannertwo/>
   <Products/>
   <Cardtwo/>
   <Newcollection/>
    </>
  )
}
