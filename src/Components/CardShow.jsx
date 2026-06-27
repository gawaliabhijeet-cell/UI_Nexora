import React from "react";

export default function CardShow({market}) {
  return (
    <div className="w-72 m-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={market.image}
          alt="New Arrivals"
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div>
            <span className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              NEW
            </span>

            <h1 className="mt-4 text-3xl font-bold text-white">{market.name}</h1>

            <p className="mt-2 text-gray-200">
              Discover the latest tech accessories.
            </p>
          </div>

          <button className="cursor-pointer bg-white h-auto w-40 text-black px-6 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-black transition duration-300">
            Shop Now
          </button>
        </div> 
      </div>
    </div>
  );
}
