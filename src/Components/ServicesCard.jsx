function ServicesCard({ data }) {
  return (
    <div className="flex flex-wrap gap-4">
      {data.slice(0, 5).map((item) => (
        <div
          key={item.id}
          className="max-w-md rounded overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image */}
          <img
            className="w-full h-48 object-cover"
            src={item.images?.[0]}
            alt={item.title}
          />

          {/* Content */}
          <div className="px-6 py-4">
            {/* API Title */}
            <h2 className="font-bold text-lg text-gray-800">
              {item.category}
            </h2>

            {/* Price */}
            <p className="text-gray-600">💲 {item.price}</p>

            {/* Static cType */}
            <p className="text-lg text-black underline font-semibold">
               Name: {item.cType}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesCard;
