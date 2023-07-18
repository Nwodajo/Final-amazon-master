import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useDataGlobaly } from "../StateProvider/StateProvider";
import { Link } from "react-router-dom";
// import { getBasketTotal } from '../Reducer/Reducer';
function Subtotal() {
  const [totlaPrice, setTotalPrice] = useState(0);
  const { basket } = useDataGlobaly();

  useEffect(() => {
    let tp = 0;
    const total = basket?.map((bs) => {
      return (tp += Number(bs.price));
    });

    setTotalPrice(tp);
  }, [basket]);
  return (
    <div className="subtotal">
      {/* {console.log(basket)} */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h5>
              Subtotal ( items): <strong> {value}</strong>
            </h5>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totlaPrice}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to={"/payment"}>
        <button className="checkout-proceed">Proceed to checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;
