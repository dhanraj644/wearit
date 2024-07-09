import React from 'react'
import './relatedproduct.css'
import data_product from '../Assets/data'
import { Cardd } from '../onecard/Cardd'

export default function Relatedproduct() {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproduct-item">
            {data_product.map((item,i)=>{
           return  <Cardd key={i} id={item.id}  name={item.name} image={item.image}
            new_price={item.new_price} old_price={item.old_price}/>
       })}
        </div>
    </div>
  )
}

