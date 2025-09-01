import { useLocation } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

const ProductListing = () => {
  const location = useLocation();
  const { productData } = location.state || {};

  return (
    <div className="w-screen min-h-screen bg-[#f1f3f6] flex flex-col">
      <h1 className="text-2xl font-bold py-6 text-center bg-white shadow">Products</h1>

      <div className="flex gap-4 px-4 pb-10 pt-5">
        {/* Filter Section */}
        <div className="hidden lg:block w-1/6 bg-white p-4 rounded shadow-md text-sm text-gray-800">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          {/* Brand Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Brand</h3>
            <div className="space-y-1">
              {['Apple', 'Motorola', 'Samsung', 'Vivo'].map(i => (
                <label key={i} className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="checkbox" className="accent-blue-600" />
                  <span>{i}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-6 border-t pt-4">
            <h3 className="font-semibold mb-2">Price</h3>
            <div className="space-y-1">
              {['Below ₹1000', '₹1000 - ₹5000', '₹5000 - ₹10000', 'Above ₹10000'].map((range, idx) => (
                <label key={idx} className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="radio" name="price" className="accent-blue-600" />
                  <span>{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Discount Filter */}
          <div className="mb-6 border-t pt-4">
            <h3 className="font-semibold mb-2">Discount</h3>
            <div className="space-y-1">
              {[10, 20, 30, 40].map((percent) => (
                <label key={percent} className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="radio" name="discount" className="accent-blue-600" />
                  <span>{percent}% or more</span>
                </label>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-4 border-t pt-4">
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="space-y-1">
              {['Black', 'White', 'Blue', 'Red', 'Green'].map((color, i) => (
                <label key={i} className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                  <input type="checkbox" className="accent-blue-600" />
                  <span className="w-4 h-4 rounded-full border" style={{ backgroundColor: color.toLowerCase() }}></span>
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          {productData ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {productData.products?.map((product, index) => (
                <div
                  key={index}
                  className="relative bg-white border rounded shadow p-4 text-center w-full"
                >
                  {/* Heart Icon */}
                  <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
                    <AiOutlineHeart className="relative -left-2 -bottom-2" size={24} />
                  </button>

                  {/* Product Image */}
                  <div className="overflow-hidden flex justify-center h-36">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain max-h-full"
                    />
                  </div>

                  {/* Product Info */}
                  <h2 className="mt-2 text-base font-semibold">{product.name}</h2>
                  <p className="text-gray-700">Price: ₹{product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No product data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
