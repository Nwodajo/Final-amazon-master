import React, { useEffect, useState } from "react";
import "./Home.css";
import Banners from "./HomeData";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import ProductsData from "..//ProductsData/ProductsData";

import Products from "../Products/Products";

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(Banners.length - 1);
    }
    if (index > Banners.length - 1) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const BannerInterval = setInterval(() => {
      setIndex(index + 1);
      return clearInterval(BannerInterval);
    }, 3000);
  }, [index]);

  return (
    <div className="banner-and-products">
      <div className="banners_container">
        <div className="banners">
          {Banners.map((banner, bannerIndex) => {
            let postion = "next";
            if (bannerIndex === index) {
              postion = "active";
            }
            if (
              bannerIndex === index - 1 ||
              (index === 0 && bannerIndex === Banners.length - 1)
            ) {
              postion = "prev";
            }
            return (
              <img
                key={bannerIndex}
                className={`banner ${postion}`}
                src={banner.img}
                alt=""
              />
            );
          })}
        </div>
        <ChevronLeftOutlinedIcon
          sx={{ fontSize: "80px", fontWeight: "200" }}
          className="left"
          onClick={() => setIndex(index - 1)}
        />
        <ChevronRightOutlinedIcon
          sx={{ fontSize: "80px", fontWeight: "200" }}
          className="right"
          onClick={() => setIndex(index + 1)}
        />
      </div>
      <div className="banner-and-product-flex-second">
        <Products />
      </div>
      <div className="banner-and-product-flex-third"></div>
    </div>
  );
}

export default Home;
