import React from "react";
import { useEffect, useState } from "react";
import Category from "./Components/Category";
import Carousel from "./Components/CommonComponents/Carousel";
import allCarouselData from "./Data/AllCarousel.json";
import allCategoryData from "./Data/AllCategory.json";
import lowPriceData from "./Data/LowPrice.json";
import MoreDemanded from "./Components/CommonComponents/MoreDemanded";
import Top_offers from "./Components/CommonComponents/Top_offers";
// import Smartphones from "./Components/CommonComponents/Smartphones";
// import OfferPrice from "./Components/CommonComponents/OfferPrice";
// import gridData from "./Data/GridCategory.json";
import Gridbox from "./Components/CommonComponents/Gridbox";

function Home() {
  const [catonedata, setCatonedata] = useState([]);
  const [catTwodata, setCatTwodata] = useState([]);
  const [catThreedata, setCatThreedata] = useState([]);


  // const [stuData, setStuData] = useState([]);
  // const [  , setLoadingState] = useState(true);
  
  // useEffect(() => {
  //   fetch("https://dummy-json.mock.beeceptor.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => setStuData(data))
  //     .catch((error) => console.error("Error:", error));
  //   setLoadingState(false);
  // }, []);

  // let fname = false;
  // let age = 20;

const [className, setClassName] = useState("12");
const name = "Hemant Gabra"



  useEffect(() => {
    const catOne = allCategoryData.allCategory[2].fashionData[0].FestiveData;
    const catTwo = allCategoryData.allCategory[2].fashionData[1].SummerData;
    setCatonedata(catOne);
    setCatTwodata(catTwo);
    // {fname ? alert("welcome moni you are 20 year old") : alert("moni you are not eligibal")}
  }, 
  []);

  return (
    <div>
      <div className="bg-[#f1f2f4] px-20">
        {/* <h1>Hemant Gabra</h1> */}

        
        <Category />
        <Carousel carouselImg={allCarouselData.allCarousel} />
        <Top_offers topOffer={allCategoryData.allCategory[2].fashionData} />


        
        <MoreDemanded currentOffer={lowPriceData.offerCategory} />
        <MoreDemanded
          phonesImg={
            allCategoryData.allCategory[3].electronicsData[8].smartphones
          }
        />
        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-4 p-4 bg-[white]">

          <Gridbox grid_deal={catonedata} />
          <Gridbox grid_deal={catTwodata} />


          {/* This is simple way for static data */}

          {/* <Gridbox grid_deal={gridData.gridCategory[1].SummerData}/> */}

          {/* This is simple way for static data */}
        </div>

      </div>
    </div>
  );
}

export default Home; 