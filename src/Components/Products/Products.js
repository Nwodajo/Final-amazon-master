// import React, { useEffect, useState } from "react";
// import product1 from "../../images/laptop1.jpg";
// import product2 from "../../images/laptop2.jpg";
// import product3 from "../../images/laptop3.jpg";

import React, { useEffect } from "react";
import Computeraccessories from "../Productlist/Computeraccessories/Computeraccessories";
import GamingProducts from "../Productlist/GamingProducts/GamingProducts";
import Laptops from "../Productlist/Laptops/Laptops";
import {ProductsData} from "../ProductsData/ProductsData";
import { useDataGlobaly } from "../StateProvider/StateProvider";
import "./Products.css";

function Products() {
  const { AddToCart,basket } = useDataGlobaly();

  useEffect(() => {
    console.log("Basket change" + basket)
  },[basket])

  return (
    <div className="all-list-wrapers">
      
      <Laptops />
      <Computeraccessories />
      <GamingProducts />
    </div>
  );
}

export default Products;
