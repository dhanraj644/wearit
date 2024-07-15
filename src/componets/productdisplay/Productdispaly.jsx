import { useParams } from "react-router-dom";
import all_product from "../Assets/all_product";
import "./productdisplay.css";
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { Breadscrum } from "../breadscrum/Breadscrum";
import Relatedproduct from '../relatedproduct/Relatedproduct'


export const Productdispaly = ({ props }) => {
  const { id } = useParams();
  
  const product = all_product.find((e) => e.id === Number(id));
  
  return (
    <>
    <div>
      <Breadscrum product={product}/>
      
        <div className="productdisplay">
          <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productsisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />

          </div>
          </div>
          <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>

            </div>
            <div className="productdisplay-right-prices">
              <div className="productdispaly-right-price-old">RS.{product.old_price}</div>
              <div className="productdisplay-right-price-new">RS.{product.new_price}</div>
            </div>
            <div className="productdispaly-right-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              ia doloribus ullam illo? Placeat debitis iste mollitia laborum!
            </div>
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
              <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>

            <button>Add To Cart</button>
            <p className="productdisplay-right-category"><span>Catecory :</span>Women , T-Shirt, Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags :</span>Modern , Latest, Crop Top</p>

          </div>
         
        </div>

     <hr />
        <Relatedproduct/>
        </div>
    </>
  );
};
