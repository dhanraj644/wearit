import React from 'react'
import './cartitems.css'
import Remove_icon from '../Assets/cart_cross_icon.png'
const Cartitems = () => {
  return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {/* {all_product.map((e)=>{
        if(cartitems[e.id]>0)
        { */}
            {/* return */}
              <div>
            <div className="cartitems-format">
                <img src="" alt="" className='carticon-product-icon' />
                <p></p>
                <p></p>
                <button className='cartitems-quantity'> </button>
                <p></p>
                <img src={Remove_icon} alt="" />
            </div>
        </div>
        {/* }
       })} */}
    </div>
  )
}

export default Cartitems