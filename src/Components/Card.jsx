import React from 'react'

export default function Card({shop}) {
  return (
     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group w-72">

  {/* Product Image */}
  <div className="relative overflow-hidden">
    <img
      src={shop.image}
      alt={shop.name}
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
    />

    {/* New Badge */}
    <span className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
      New
    </span>
  </div>

  {/* Product Details */}
  <div className="p-5">
    <h2 className="text-xl font-bold text-gray-900">
      {shop.name}
    </h2>

    <p className="mt-2 text-2xl font-bold text-orange-700">
      {shop.money}
    </p>

    <button className="mt-5 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-300 cursor-pointer">
      Shop Now
    </button>
  </div>

</div>

  
  )
}