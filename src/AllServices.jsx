import { useEffect, useState } from "react";
import ServicesCard from "./Components/ServicesCard";

function AllServices() {
  const [allServices, setAllServices] = useState([]);

  const cType = [
    { name: "Mascara" },
    { name: "EyeShadow" },
    { name: "Face Powder" },
    { name: "Red Lipstick" },
    { name: "NailPaint" },
  ];

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Attach cType
        const updatedProducts = data.products.map((item, index) => ({
          ...item,
          cType: cType[index % cType.length].name,
          // cType: cType[index] ? cType[index].name : "N/A",
        }));

        setAllServices(updatedProducts);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, [cType]);

  return (
    <div className="container w-full m-auto p-10">
      <h2 className="text-2xl font-bold mb-6">All Services</h2>
      <ServicesCard data={allServices} />
    </div>
  );
}

export default AllServices;
