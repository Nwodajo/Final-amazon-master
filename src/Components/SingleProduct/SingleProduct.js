import React, { useEffect, useState } from "react";
import img1 from "../../images/laptop1.jpg";
import "./SingleProduct.css";
import data from "../Rainforest/sampleData";
import { LaptopsData } from "../ProductsData/ProductsData";
import { useParams } from "react-router-dom";

function SingleProduct() {

    const [singleProduct,setProduct]=useState()

    const { pid } = useParams();
    let global = Math.floor(pid);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // console.log(id)

  useEffect(() => {
    // console.log("id" + global);

    const filterd = LaptopsData.filter((product) => product?.id === global)

      setProduct(filterd);
    // console.log(filterd);
  }, []);
    
    console.log(singleProduct)

  return (
    <div className="single-product">
      {/* first section  */}
      <div className="product-image first">
        <img src={img1} alt="" />
      </div>

      {/* Second section  */}
      <div className="second">
        <div className="single-product-wraper ">
          <div className="product-title">Macbook pro</div>
          <div className="product-rating">
            <span className={`fa fa-star ${4 >= 1 && "checked"}`}></span>
            <span className={`fa fa-star ${4 >= 2 && "checked"}`}></span>
            <span className={`fa fa-star ${4 >= 3 && "checked"}`}></span>
            <span className={`fa fa-star ${4 >= 4 && "checked"}`}></span>
            <span className={`fa fa-star ${4 >= 5 && "checked"}`}></span>
            {4} /5
          </div>
          <div className="product-price">Price: {500} $</div>

          {/* {console.log(product)} */}
          <div className="stock">{"on stock"}</div>
          <div className="discription">
            "Buying a gaming laptop isn't easy as there are tons of options
            these days, with new models coming out every year sporting
            increasingly more powerful CPUs and GPUs. On top of that, a CPU or
            GPU might perform very differently from one laptop to another due to
            their power draw and the chassis' thermal limitations, making the
            buying decision even harder."
          </div>
        </div>
      </div>

      {/* third section  */}
      <div className="third">
        <div className="third-inner">
          <div className="buy-new">Buy new:</div>
          <div className="third-price">$95.20</div>
          <div className="date">$14.19 delivery Wednesday, March 15</div>
          <div className="instock">in Stock</div>
          <button className="cartss">Add to cart</button>
          <button className="buys">Buy Now</button>
          <div className="transaction">Secure transaction</div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
