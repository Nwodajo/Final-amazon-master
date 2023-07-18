import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import amazon from "../../images/pngimg.com - amazon_PNG11.png";
import US from "../../images/united-states.png";
// import location from "../../images/location.png";
import "./Header.css";
import { useDataGlobaly } from "../StateProvider/StateProvider";
import { auth } from "../../firebase";
import { signOut } from "@firebase/auth";

function Header() {
  const { basket, user, SignoutUser } = useDataGlobaly();
  // console.log(basket);

   const Signout = () => {
    // user
    SignoutUser(auth);
  };

  return (
    <div className="header">
      <div className="outer-wraper">
        <Link to={"/"}>
          <img className="amazon-logo" src={amazon} alt="amazon-logo-pic" />
        </Link>

        <div className="delivery">
          <div className="location-icon">
            <LocationOnIcon />
            {/* <img src={location} alt="" /> */}
          </div>

          <div className="first-paragraphs">
            <p className="p1">Deliver to</p>
            <p className="p2">United Kingdom</p>
          </div>
        </div>

        <div className="search-wraper">
          <div className="drop-down">
            <select name="" id="">
              <option value="">All</option>
            </select>
          </div>
          <div>
            <input
              className="search-input"
              type="text"
              name=""
              id=""
              placeholder="  Search Amazon"
            />
          </div>
          <div className="search-logo">
            <div className="search-internal">
              <SearchIcon />
            </div>
          </div>
        </div>

        <div className="links">
          <div className="flag">
            <div>
              <img src={US} alt="" />
            </div>
            <div className="en">EN</div>
          </div>

          <div className="signin">
            <Link to="/login">
              <div className="p1">Hello, {user ? user.email : "guest"}</div>
            </Link>
            {user ? (
              <div onClick={Signout}>{user ? "signout" : "signin"}</div>
            ) : (
              <Link to={"/login"}> signin</Link>
            )}
          </div>
          <Link to="/orders">
            <div className="returns">
              <div className="p1">Returns</div>
              <div className="p2">& Orders</div>
            </div>
          </Link>

          <div className="cart">
            <div>
              <Link to={user ? "/checkout" : "/"}>
                <ShoppingCartIcon />
              </Link>
            </div>
            <div className="length">{basket?.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
