import React, { useContext } from 'react'
import { Cardd } from '../onecard/Cardd'
import './shopcategary.css'
import { ShopContext } from '../context/ShopContextProvider'
export const Shopcategary = (props) => {
  const {all_product} =useContext(ShopContext)
  return (
    <>
    <div className="shop_c ">
        <img className='img-fluid' src={props.banner} alt="" />
    </div>

    <div className="main1">
        {all_product.map((item,i)=>{

            if(item.category===props.category){
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
