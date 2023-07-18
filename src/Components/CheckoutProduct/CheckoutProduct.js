import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useDataGlobaly } from "../StateProvider/StateProvider";

function CheckoutProduct() {
  const { basket, RemoveCart } = useDataGlobaly();
  const [totlaPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   let tp = 0;
  //   const total = basket?.map((bs) => {
  //     return (tp += Number(bs.price));
  //   });

  //   setTotalPrice(tp);
  // }, [basket]);
  

  
    console.log(basket);
  

  let totalPrice = 0;
  return (
    <div className="checkout-outer-wraper">
      {basket?.map((singleBasket,index) => {
        // totalPrice += Number(singleBasket.price);

        return (
          <div className="cart-wraper" key={index}>
            <div className="carts">
              <div className="banner-title">Shooping Cart</div>

              <hr />
              <div className="all-data">
                <div className="product-img">
                  <img src={singleBasket.image} alt="" />
                </div>
                <div className="data">
                  <div className="title-wraper">
                    <div className="title">{singleBasket.title}</div>
                    
                    {/* <div className="price">${singleBasket.price}</div> */}
                  </div>

                  <p className="checkoutProduct__rating">
                    {/* {Array(singleBasket.rating)
                      .fill()
                      .map((value, index) => {
                        return (
                          <p key={index} className="rating-count">
                            ⭐
                          </p>
                        );
                      })} */}
                    <span
                      className={`fa fa-star ${
                        singleBasket.rating >= 1 && "checked"
                      }`}
                    ></span>
                    <span
                      className={`fa fa-star ${
                        singleBasket.rating >= 2 && "checked"
                      }`}
                    ></span>
                    <span
                      className={`fa fa-star ${
                        singleBasket.rating >= 3 && "checked"
                      }`}
                    ></span>
                    <span
                      className={`fa fa-star ${
                        singleBasket.rating >= 4 && "checked"
                      }`}
                    ></span>
                    <span
                      className={`fa fa-star ${
                        singleBasket.rating >= 5 && "checked"
                      }`}
                    ></span>{" "}
                    {singleBasket.rating} /5
                  </p>

                  <div className="instock">in Stock</div>
                  <div className="shipping">Eligible for FREE Shipping</div>
                  <div className="gift">This is a gift</div>
                  <div className="style">
                    Style: Advanced Fast Heatup Technology
                  </div>
                  <div className="color">Color: Blue</div>
                  <div className="quantity">
                    <div>
                      <select name="1" id="">
                        <option value="1">Qty: 1</option>
                        <option value="2">Qty: 2</option>
                        <option value="3">Qty: 3</option>
                        <option value="4">Qty: 4</option>
                        <option value="5">Qty: 5</option>
                        <option value="6">Qty: 6</option>
                        <option value="7">Qty: 7</option>
                        <option value="8">Qty: 8</option>
                        <option value="9">Qty: 9</option>
                        <option value="10+">Qty: 10</option>
                      </select>
                    </div>

                    <div className="last-edit">
                      <ul>
                        <li>
                          | <a href="/">Delete</a> |
                        </li>
                        <li>
                          <a href="/">Save for later</a> |
                        </li>
                        <li>
                          <a href="/">Compare with similar items</a> |
                        </li>
                        <li>
                          <a href="/">Share</a> |
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="remove-button"
                onClick={() => RemoveCart(singleBasket.id)}
              >
                Remove from basket
              </button>
              <hr />
            </div>
          </div>
        );
      })}

      {/* <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="sub-total">Subtotal ( item): {value}</div>
          </>
        )}
        decimalScale={2}
        value={totlaPrice}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      /> */}
    </div>
  );
}

export default CheckoutProduct;
