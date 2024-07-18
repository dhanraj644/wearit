import React from 'react'
import './Cardd.css'
import { Link } from 'react-router-dom'
export const Cardd = (props) => {
  return (
   <>
   <Link to={`/display/${props.id}`} style={{textDecoration:'none' }} >
   <div className="card" onClick={window.scrollTo(0,0)}>
                   <img src={props.image} alt="" />
         <div className="details">
            <p>{props.name}</p>
            <div className="price">
               <div className="newprice">
                 <h5>RS.</h5>{props.new_price}
               </div>
           <div className="oldprice">
            {props.old_price}
           </div>
            </div>
         </div>
        </div>
        </Link>
   </>
  )
}
