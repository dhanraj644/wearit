import React from 'react'
import New_pro from'../Assets/new_collections'
import { Cardd } from '../onecard/Cardd'
import './new_collection.css'
export const Newcollection = () => {
  return (
    <>
     
   
   <center>
        <h1 className='titel'>New Collections</h1>
        <div className="line"></div>
     </center>
  
      <div className="collection">
       {New_pro.map((item,i)=>{
           return  <Cardd key={i} id={item.id}  name={item.name} image={item.image}
            new_price={item.new_price} old_price={item.old_price}/>
       })}
         
      </div>
  
    
    </>
  )
}
