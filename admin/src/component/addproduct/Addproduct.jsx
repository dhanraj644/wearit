import React, { useState } from 'react'
import './Addproduct.css';
import upload_area from '../../assets/upload_area.svg'

const Addproduct = () => {
    const[image,setimage]=useState(false);
    const[productdetails,setproductdetails]=useState({
        name:"",
        image:"",
        category:"Women",
        new_price:"",
        old_price:""

    })

    const imageshandler = (e) =>{
        setimage(e.target.files[0])
    }
    const changeHandler =(e)=>{
        setproductdetails({...productdetails,[e.target.name]:e.target.value})
    }

    const Add_product = async ()=>{
        console.log(productdetails)
        let responseData;
        let product=productdetails;

        let formData = new FormData();
           formData.append('product',image);

         await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
         }).then((res)=>res.json()).then((data)=>{responseData=data});
         
         if(responseData.success)
            {
                product.image =responseData.image_url;
                console.log(product);
                await fetch('http://localhost:4000/addproduct',{
                    method:'POST',
                    headers:{
                        Accept:'application/json',
                        'Content-Type':'application/json',
                             },
                    body:JSON.stringify(product),          
                }).then((res)=>res.json()).then((data)=>{
                    data.success?alert("Product Added"):alert("Failed")
                })
            }  

    }
  return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={productdetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productdetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here'/>
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input value={productdetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here'/>
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Producr Category</p>
            <select value={productdetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Kid">Kid</option>

            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} alt=""  className='addproduct-thumnail-img'/>
            </label>
            <input onChange={imageshandler} type="file" name='image' id='file-input' hidden />
        </div>
        <button className='addproduct-btn' onClick={()=>{Add_product()}}>ADD</button>
    </div>
  )
}

export default Addproduct