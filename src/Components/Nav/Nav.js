import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <div>
      <div className="wraper">
        <ul className="first-ul">
          <li>
            <a href="/"> ☰All</a>
          </li>
          <li>
            <a href="/">Todays'Deals</a>
          </li>
          <li>
            <a href="/">Customer Service</a>
          </li>
          <li>
            <a href="/">Registry</a>
          </li>
          <li>
            <a href="/">Gift Cards</a>
          </li>
          <li>
            <a href="/">Sell</a>
          </li>
        </ul>

        <ul className="shop">
          <li>
            <a href="/">Shop Deals in Electronics</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav