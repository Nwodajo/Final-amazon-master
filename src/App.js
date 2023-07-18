import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Ads from "./Components/Ads/Ads";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";
import SingleProduct from "./Components/SingleProduct/SingleProduct"

const promise = loadStripe(
  "pk_test_51MfjA5EhJx2w283p7uVxSTaFozx3DHZKZpa5tGefmsHJGaXwm9gfTUNn4r9RTRtIqbq0Vv3x5s9u33IfZQleH07O00fnTjc37Z"
);

function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <Header />
                  <Nav />
                  <Home />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Ads />
                  {/* <Login /> */}
                  <Checkout />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            />
            <Route
              path="/orders"
              element={
                <>
                  <Header />
                  <Orders />
                </>
              }
            />
            <Route
              path="/:pid"
              element={
                <>
                  <Header />
                  <SingleProduct />
                </>
              }
            />
            <Route
              path="/payment"
              element={
                <>
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </>
              }
            />
          </Routes>
        </Router>
        {/* <Products /> */}
      </div>
    </div>
  );
}

export default App;
