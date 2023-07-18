import axios from 'axios';
import requests from '../Rainforest/requests'
import React, { useEffect, useState } from 'react'
import sampleData from './sampleData';

function Rainforest() {
    const [rain,setRain] = useState([])

    // useEffect(() => {
    //   // async function fetchData() {
    //   //     const request = await axios.get(fetchUrl);
    //   //     console.log(request)
    //   //     setMovies(request.data.results);
    //   //     return request
    //   // }
    //   // fetchData()

    //   axios.get(requests.laptop).then((request) => {
    //     // console.log(request)
    //     setRain(request);
    //   });
    // }, []);

  
  useEffect(() => {
    setRain(sampleData[0].search_results);
  },[])

  // console.log(rain)
  
   function truncate(str, n) {
     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
   }
    
  return (
    // <div className="row">
    //   <div className="row__posters">
    //     {rain.map((movie, index) => {
    //       const data = (
    //         <img
    //           // onMouseEnter={MouseOver(movie)}
    //           key={index}
    //           src={movie.image}
    //           alt={movie.name}
    //         />
    //       );
    //       return data;
    //     })}
    //   </div>

    // </div>

    <div>
      <h1 className="catagories-title row">Laptops</h1>
      <div className="banner-and-product-flex">
        {rain.map((product,index) => {
          return (
            <div className="products-wraper col-lg-5 " key={index}>
              <div className="product-image">
                <img src={product.image} alt="" />
              </div>
              <div className="product-title">
                {truncate(product.title, 130)}
              </div>
              <div className="product-rating">
                <span
                  className={`fa fa-star ${product.rating >= 1 && "checked"}`}
                ></span>
                <span
                  className={`fa fa-star ${product.rating >= 2 && "checked"}`}
                ></span>
                <span
                  className={`fa fa-star ${product.rating >= 3 && "checked"}`}
                ></span>
                <span
                  className={`fa fa-star ${product.rating >= 4 && "checked"}`}
                ></span>
                <span
                  className={`fa fa-star ${product.rating >= 5 && "checked"}`}
                ></span>{" "}
                {product.rating} /5
              </div>
              <div className="products-price">{product.price.raw} $</div>

              {/* {console.log(product)} */}
              {/* <div className="stock">{product?.availability}</div> */}

              {/* <div className="add-cart">
                      <button onClick={() => AddToCart(product.id)}>
                        Add to cart
                      </button>
                    </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rainforest