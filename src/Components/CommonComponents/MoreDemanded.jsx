import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function MoreDemanded({ phonesImg, currentOffer }) {

const offerCategory = useSelector((state) => state.offer.offerCategory);
console.log("ShoesData**********", offerCategory);


  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };


  return (
    <div>
      <div className="bg-white ">
        {!phonesImg? <div className="text-2xl font-semibold pl-5 pt-2 pb-5">₹499 Only</div> : ''}

        {!phonesImg? 
       <Slider {...settings }>
          {currentOffer.map((item) => (
            <Link
              key={item.id}
              to={`/productListing/${item.id}`}
              state={{ productData: item }}
              className=" p-4 rounded hover:shadow-lg transition"
            >
              <div
                className="flex flex-col items-center px-10 py-2 mb-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[10rem] rounded-md"
                />
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-green-600 font-semibold text-sm">
                  ₹{item.price}
                </p>
              </div>
            </Link>
          ))}
          </Slider>
        : ''}
        
      </div>
      <div className=" bg-white my-10">
        {!currentOffer? <div className="text-2xl font-semibold pl-5 pt-2 pb-10">Best deals on Smartphones</div> : ''}
        
          {!currentOffer? 
        <Slider {...settings}>
          {phonesImg?.map((data) => (
            <Link
              key={data.id}
              to={`/productListing/${data.id}`}
              state={{ productData: data }}
              className=" rounded hover:shadow-lg transition"
            >
              <div key={data.id} className="px-8 w-full pb-5">
                <img src={data.image} alt={data.name} className=" w-fullh-[10rem] mb-5" />
                <p className="text-sm text-center">{data.name}</p>
                <p className="font-semibold text-center">{data.price}</p>
              </div>
            </Link>
          ))}
        </Slider> : ''
        }
      </div>
    </div>
  );
}

export default MoreDemanded;
