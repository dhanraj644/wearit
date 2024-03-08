import React from 'react'
import all_product from '../Assets/all_product'
import { Cardd } from '../onecard/Cardd'
import './shopcategary.css'
export const Shopcategary = (props) => {
  return (
    <>
    <div className="shop_c ">
        <img className='img-fluid' src={props.banner} alt="" />
    </div>

    <div className="main1">
        {all_product.map((item,i)=>{

            if(item.category==props.category){
            return  <Cardd key={i} id={item.id}  name={item.name} image={item.image}
             new_price={item.new_price} old_price={item.old_price}/>
            }
            else
            {
                return null
            }
        })}
          
       </div>
    </>
  )
}
