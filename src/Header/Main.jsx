import React from 'react'

export default function Main() {
  return (
   <div className="relative w-full h-[90vh] overflow-hidden">

  <img
    src="https://i.pinimg.com/1200x/8f/ed/50/8fed50cbf7fc9783f5630aa4f91d757d.jpg"
    alt="Tech Banner"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/55"></div>

  <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24">

    <p className="text-cyan-400 uppercase tracking-[4px] text-sm md:text-base font-semibold mb-3">
      Premium Electronics
    </p>

    <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold text-orange-700 leading-tight">
      Top Tech Gear
    </h1>

    <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold text-orange-700 leading-tight">
      for Your Lifestyle
    </h1>

    <p className="mt-6 text-white text-lg md:text-xl max-w-xl">
      Explore the latest gadgets
    </p>

    <button className="cursor-pointer mt-8 px-8 py-4 bg-gray-400 text-black font-semibold rounded-full hover:bg-orange-700 hover:scale-105 transition-all duration-300 shadow-lg">
      Shop Now 
    </button>

  </div>

</div>
  )
}
