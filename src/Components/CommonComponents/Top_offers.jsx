import React from "react";
import Slider from "react-slick"; // Add this import if using react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link} from "react-router-dom";
function topOffers({topOffer}){

    const offersettings = {
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
        ]
      };

    return(
       
            <div className=" bg-white mb-10">
            <div className="text-2xl font-semibold pl-5 pt-2 pb-10">
              Top Offers
            </div>
            <Slider {...offersettings}>
              {topOffer.map((item) => (
                <Link   key={item.id}
                to={`/productListing/${item.id}`}
                state={{ productData: item }}
                className=" p-4 rounded hover:shadow-lg transition">
                <div key={item.id} className="px-10 w-full">
                  <img src={item.image} className="w-full h-[10rem] mb-5" />
                  <p className="text-sm text-center">{item.name}</p>
                  <p className="font-semibold text-center">₹{item.price}</p>
                </div>
                   </Link>
              ))}
            </Slider>
          </div>
          
        );
    
}
export default topOffers;




                                // key={item.id}
                                // to={`/productListing/${item.id}`}
                                // state={{ productData: item }}
                                // className="border p-4 rounded hover:shadow-lg transition">
                                // <div key={item.id} className="flex flex-col  border-2 border-gray-200 p-5 rounded-md">
                                //     <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-2 transition-transform duraction-300 hover:scale-105 " />
                                //     <h3 className="text-lg font-semibold">{item.title}</h3>
                                //     <p className="text-gray-500">{item.deal}</p>
                                // </div>
                         

