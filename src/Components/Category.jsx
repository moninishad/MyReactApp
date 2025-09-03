import allCategoryData from "../Data/AllCategory.json";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { useRef } from "react";

function Category() {
  const categoryWithDropdown = [3, 4, 5, 8, 9];
  const [hoveredCategory, setHoveredCategory] = useState(null);
  
  // const inputRef = useRef(null);
  // const fileRef = useRef(null);
  const [categories, setCategories] = useState(() => allCategoryData?.allCategory || []);
  
  

//   const addCategory = () => { 
//    const name = inputRef.current.value;
//    const imageFile = fileRef.current.files[0];


//    if (name === '' || !imageFile) {
//     alert("Please enter name and select img.");
//     return; 
//   };
// debugger
//   const newCategory = {
//     id: categories.length + 1,
//     name: name,
//     image: URL.createObjectURL(imageFile),
//     price: Math.floor(Math.random() * 500) + 100,
//   }
// debugger
//     setCategories([...categories, newCategory]);
//     inputRef.current.value = "";
//     fileRef.current.value = null

    

// }

useEffect (()=>{
  setCategories(allCategoryData?.allCategory || []);
}, []);

  
  return (
    <div className="w-full bg-[#f1f2f4]  pt-4 "> 
    
   
    
      <div className="flex bg-white justify-evenly text-center grid grid-cols-2  md:grid-cols-4 lg:grid-cols-9 gap-4">
        {categories.map((category) => {
          const subcategories =
            category.fashionData ||
            category.electronicsData ||
            category["home&furnitureData"] ||
            category["beauty&toysData"] ||
            category.wheelarsData ||
            [];
          return (
            <div
              className="px-5 relative "
              key={category.id}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div>
                <img src={category.image} alt={category.name} />
              </div>
              <p className="font-semibold flex ">
                {category.name}
                {categoryWithDropdown.includes(category.id) && (
                  <FaChevronDown className="text-[0.8rem] mx-2 mt-1.5 transaction-transform hover:rotate-180 duration-300" />
                )}
              </p>
              <p>{category.title}</p>
              {hoveredCategory === category.id && subcategories.length > 0 && (
                <div className="absolute left-[-10rem]  w-[15rem] bg-white text-black border rounded-lg shadow-lg text-left pl-2 z-10">
                  {subcategories.map((item) => (
                    <p key={item.id} className="text-sm py-3">
                      {item.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        {/*         <div className="my-12">
          <div>    
                  <input 
                    type="file"
                    ref={fileRef}
                    placeholder="Add category image"
                    className="border rounded-md mb-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
          </div>
          <div>         
           <input
              type = "text"
              
          placeholder="Add new category"
          className="border rounded-md mt-2 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
          ref={inputRef}
          
          
            />
          </div>
        </div>
        <button
        onClick={addCate}
         className="bg-green-500 hover:bg-green-600 rounded-md text-white px-3  my-20">Add</button>
 */}
      </div>
      
    </div>
  );
}
export default Category;
