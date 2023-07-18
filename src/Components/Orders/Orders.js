import React, { useEffect, useState } from "react";
import paid from "../../images/paid-stamp-icon-sign-stock-vector-paid-stamp-icon-sign-stock-vector-162232001.jpg";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useDataGlobaly } from "../StateProvider/StateProvider";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [lastOrders, setlastOrders] = useState([]);

  const { user } = useDataGlobaly();

  console.log(user);

  useEffect(() => {
    if (user) {
      const uid = user.uid;
      const ref = collection(db, uid);
      getDocs(ref)
        .then((response) => {
          console.log(response.docs);
          let items = [];
          //  let index=0
          response.docs.map((doc) => {
            items.push({ ...doc.data() });
            //  console.log(items)
            // setOrders(items);
          });

          let lastArr = [];
          console.log(orders)
          items?.map((order) => {
            const singleDocArr = Object.values(order);
            singleDocArr.map((siOrder) => {
              lastArr.push(siOrder);
            });
          });
          setlastOrders(lastArr);

        })
        .catch((err) => console.log(err.message));
    }
  }, [user]);
  console.log(lastOrders);
  return (
    <div className="outer-order-wraper">
      {lastOrders?.map((singleOrder, index) => {
        return (
          <div className="cart-wraper" key={index}>
            <div className="carts">
              <h1 className="banner-title">Paid Products</h1>

              <hr />
              <div className="all-data">
                <div className="product-img">
                  <img src={singleOrder.image} alt="" />
                </div>
                <div className="data">
                  <div className="title-wraper">
                    <div className="title">{singleOrder.title}</div>
                    <div className="price">${singleOrder.price}</div>
                    <div className="paid">
                      <img src={paid} alt="" />
                    </div>
                  </div>

                  <p className="checkoutProduct__rating">
                    {/* {Array(singleOrder.rating)
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
                        singleOrder.rating >= 1 && "checked"
                      }`}
                    ></span>
                    <span
                      className={`fa fa-star ${
                        singleOrder.rating >= 2 && "checked"
                      }`}
                    ></span>
                    <span
                      className={`fa fa-star ${
                        singleOrder.rating >= 3 && "checked"
                      }`}
                    ></span>
                    <span
                      className={`fa fa-star ${
                        singleOrder.rating >= 4 && "checked"
                      }`}
                    ></span>
                    <span
                      className={`fa fa-star ${
                        singleOrder.rating >= 5 && "checked"
                      }`}
                    ></span>{" "}
                    {singleOrder.rating} /5
                  </p>
                </div>
              </div>

              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
