import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import { useDataGlobaly } from "../StateProvider/StateProvider";
import "./Payment.css";
import axios from "../../axios";

import { collection, addDoc } from "firebase/firestore";
// collectio > tell where to store
//add doc  > store
import { db } from "../../firebase";
//

function Payment() {
  const { basket, user, Removebasket, RemoveAllCart } = useDataGlobaly();
  const [totalPrice, setTotalPrice] = useState(0);

  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  let totalPrices = 0;

  useEffect(() => {
    let getBasketTotal = 0;
    const total = basket?.map((bs) => {
      return (getBasketTotal += Number(bs.price));
    });
    setTotalPrice(getBasketTotal);
  }, [basket]);

  const handleSubmit = () => {
    stripe
      .createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement), //to get data from the
      })
      .then((response) => {
        const { paymentMethod } = response; // payment id
        // const totalPrice = 5000;

        axios
          .post(
            `http://localhost:3004/payment?total=${totalPrice}`,
            paymentMethod
          )
          .then((res) => {
            console.log("DATA FROM AXIOS SERVER" + res);
            const client_secret = res.data.secret;
            stripe
              .confirmCardPayment(client_secret, {
                payment_method: {
                  card: elements.getElement(CardElement),
                },
              })
              .then((response) => {
                console.log("RESPONSE AFTER COMPLITING PAYMENT " + response);
                console.log("USER ID" + user?.uid);
                const reference = collection(db, user?.uid);
                addDoc(reference, {
                  ...basket,
                }).then((response) => console.log(response));

                // navigate("/orders")
                RemoveAllCart();
                window.location.href = "/orders";
              });
          });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <div className="payment-banner-title">
        <Link to={"/checkout"}>
          <h2>
            <span>Checkout</span>
            <span> ({basket.length}: items)</span>
          </h2>
        </Link>
      </div>

      <div className="payment-checkout-outer-wraper">
        {basket?.map((singleBasket, index) => {
          totalPrices += Number(singleBasket.price);

          return (
            <div className="payment-basket-wraper">
              <div className="payment-baskets">
                <hr />
                <div className="payment-all-data">
                  <div className="payment-product-img" key={index}>
                    <img src={singleBasket.image} alt="" srcset="" />
                  </div>
                  <div className="payment-data">
                    <div className="payment-title-wraper">
                      <div className="title">{singleBasket.title}</div>
                      <div className="price">${singleBasket.price}</div>
                    </div>

                    <p className="payment-checkoutProduct__rating">
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
                  </div>
                </div>
                <button
                  className="remove-button"
                  onClick={() => Removebasket(singleBasket.id)}
                >
                  Remove from basket
                </button>

                <hr />
              </div>
            </div>
          );
        })}

        <CurrencyFormat
          renderText={(value) => (
            <>
              <CardElement className="card-element" />
              <div className="payment-footer-wraper">
                <div className="payment-footer-title">Payment Method </div>
                <div className="payment-footer">
                  {/* <div>Card number</div> */}
                  <div className="payment-sub-total">
                    Order total ( {basket.length} item ): {totalPrice}
                  </div>
                  <div className="payment-buynow">
                    <button onClick={handleSubmit}>Buy Now</button>
                  </div>
                </div>
              </div>
            </>
          )}
          decimalScale={2}
          value={totalPrice}
          displayType="text"
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default Payment;
