import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Cardd } from '../onecard/Cardd';
import Popular_product from '../Assets/data'



const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = Popular_product.map((item, i) => (
  <center>
    <div className="item" data-value="1">
      <Cardd
        key={i}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}
      />
    </div>
  </center>
));


export const Cardtwo = () => {

  return (
    <>
      <section>
      <center>
      <h1 className='titel'>Popular Product's</h1>
      <div className="line"></div>
   </center>
   <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
      </section>
    </>
  )
}
