import { useParams } from "react-router-dom";
import all_product from "../Assets/all_product";
import "./productdisplay.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Imagegallry } from "./Imagegallry";




export const Productdispaly = ({ props }) => {
  const { id } = useParams();
  
  const product = all_product.find((e) => e.id === Number(id));
  const img=product.image;
  Fancybox.bind("[data-fancybox]", {
    // Your custom options

    
  });
  
  return (
    <>
        <section>
        <div className="main-section">
          <div className="left-section">
          <Imagegallry img={img}/>
                     </div>
          <div className="right-section">
            <h2>H&M</h2>
            <h4>{product.name}</h4>
            <hr />

            <div className="price-section">
              <h4>MRP :</h4>
              <h3>₹{product.new_price}</h3>
            </div>

            <div className="size-section">
              <h6>SELECT SIZE :</h6>
              <div className="size-list">
                <div className="size">S</div>
                <div className="size">M</div>
                <div className="size">L</div>
                <div className="size">XL</div>
              </div>
            </div>

            <div className="buttons">
              <button className="btn btn-buy">BUY NOW</button>
              <button className="btn btn-cart">ADD TO CART</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
