import React, { useContext } from 'react'
import './cartitems.css'
import Remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../context/ShopContextProvider'

const Cartitems = () => {

  const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext)
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
       {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
           
          return <div>
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>RS:{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]} </button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={Remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}} />
            </div>
            <hr />
        </div>
        
       }
       return null;
       })} 
       <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>RS:{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shiping fee</p>
              <p>Free</p>
            </div>
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>RS:{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        
       </div>
    </div>
  )
}

export default Cartitems