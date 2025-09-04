import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CategorySlide(catSlideImg) {
  const catslide = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  };

  return (
    <div className="flex">
    <div className=" bg-white my-10 w-full">
      <div className="text-2xl font-semibold pl-5 pt-2 pb-10">
        Top Offers
      </div>  
      <Slider {...catslide}>
        {catSlideImg.catSlideImg.map((item) => (
          <div key={item.id} className="flex justify-center px-6 w-full">
            <img src={item.image} alt={item.name} className="h-[10rem] mb-5" />
            <p className="text-sm text-center">{item.name}</p>
            <p className="font-semibold text-center">{item.discount}</p>
          </div>
        ))}
      </Slider>
    </div>
    {/* <div>
        <img src="./images/topOffersImage/7.jpeg" alt="" />
      </div> */}
    </div>
  );
}
export default CategorySlide;
