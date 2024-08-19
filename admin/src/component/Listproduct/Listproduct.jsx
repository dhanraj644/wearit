import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import cross_icon from '../../assets/cross_icon.png' 

const Listproduct = () => {

  const [allproducts,setAllproducts]=useState([]);

  const fetchInfo= async ()=>{
      await fetch('http://localhost:4000/allproduct')
      .then((res)=>res.json())
      .then((data)=>{setAllproducts(data)})
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  
  return (
    <div className='listproduct'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Titel</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
      {allproducts.map((product,index)=>{
        return <><div key={index} className="listproduct-format-main listproduct-format">
          <img src={product.image} alt="" className="listproduct-product-icon" />
          <p>{product.name}</p>
          <p>RS:{product.old_price}</p>
          <p>RS:{product.new_price}</p>
          <p>{product.category}</p>
          <img src={cross_icon} alt="" className="listproduct-remove-icon" />
        </div>
        <hr />
        </>
      })}
      </div>
    </div>
  )
}

export default Listproduct