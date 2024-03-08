import React from 'react'
import { Cardd } from '../onecard/Cardd'
import data_product from '../Assets/all_product'

export const Products = () => {
  return (
    <section id='cart-section'> 
   
    <center>
         <h1 className='titel'>Product's</h1>
         <div className="line"></div>
      </center>
   

       <div className="main1">
        
        {data_product.map((item,i)=>{
            return  <Cardd key={i} id={item.id}  name={item.name} image={item.image}
             new_price={item.new_price} old_price={item.old_price}/>
        })}
          
       </div>
   
     
    </section>
  )
}
