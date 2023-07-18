import React from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout-both">
      <CheckoutProduct />

      <div className="checkout-rights">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
