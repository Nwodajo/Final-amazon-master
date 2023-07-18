import React from 'react'
import amazon from "../../images/amazon card.png";
import "./Ads.css"

function Ads() {
  return (
    
      <div className="ads-img">
        <div className="card">
          <img src={amazon} alt="amazon-card" />
        </div>
        <div className="ads-title">
          <span class="pay">Pay </span>
          <span class="month">$33.13/month for 6 months</span>
          <span class="interest">
            , interest-free upon approval for the Amazon Rewards Visa Card
          </span>
          <a className="learn-more" href="/">
            Learn More
          </a>
        </div>
      </div>
    
  );
}

export default Ads