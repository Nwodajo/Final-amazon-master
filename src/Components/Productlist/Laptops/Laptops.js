// import React, { useEffect, useState } from "react";
// import product1 from "../../images/laptop1.jpg";
// import product2 from "../../images/laptop2.jpg";
// import product3 from "../../images/laptop3.jpg";

import React from "react";
import { LaptopsData } from "../../ProductsData/ProductsData";

import { useDataGlobaly } from "../../StateProvider/StateProvider";

function Laptops() {
  const { AddToCart } = useDataGlobaly();

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="current-wraper">
      <h1 className="catagories-title row">Laptops</h1>
      <div className="banner-and-product-flex">
        {LaptopsData.map((product, index) => {
          const { title, id, image, price, rating } = product;
          // console.log(title)
          return (
            <div className="products-wraper col-lg-5" key={index}>
              <div className="product-image">
                <img src={product.image} alt="" />
              </div>
              <div className="product-title">
                {truncate(product.title, 120)}
              </div>
              <div className="product-rating">
                {/* {Array(product.rating)
                        .fill()
                        .map((value, index) => {
                          return (
                            <div key={index} className="rating-count">
                              ⭐
                            </div>
                          );
                        })} */}
                <span
                  className={`fa fa-star ${product.rating >= 1 && "checked"}`}
                ></span>
                <span
                  className={`fa fa-star ${product.rating >= 2 && "checked"}`}
                ></span>
                <span
                  className={`fa fa-star ${product.rating >= 3 && "checked"}`}
                ></span>
                <span
                  className={`fa fa-star ${product.rating >= 4 && "checked"}`}
                ></span>
                <span
                  className={`fa fa-star ${product.rating >= 5 && "checked"}`}
                ></span>{" "}
                {product.rating} /5
              </div>
              <div className="products-price">{product?.price} $</div>

              {/* {console.log(product)} */}
              <div className="stock">{product.raw}</div>

              <div className="add-cart">
                      <button onClick={() => AddToCart(product.id)}>
                        Add to cart
                      </button>
                    </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Laptops;
