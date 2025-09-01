import { React, useEffect } from "react";
import Slider from "react-slick";

function AutoPlay(carouselImg) {
  const settings  = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
    
  };

  
  return (
    <div className="slider-container w-full5263 py-6 bg-[#f1f2f4]">
      <div className=" bg-[white] pb-7">
        <Slider {...settings}>
          {carouselImg.carouselImg.map((item) => (
            <div key={item.id}>
              <img src={item.image}
              className="w-full h-full object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;
