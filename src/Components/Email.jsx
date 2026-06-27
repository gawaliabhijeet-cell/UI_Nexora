import React, { useState } from 'react'

export default function Email() {

    const [email,setEmail] = useState('')

    const Click = (e) => {
        setEmail(e.target.value)
    }
  return (
   <div className="bg-black py-12">
  <div className="max-w-7xl mx-auto px-6">

    <div className="bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Join Our Newsletter
        </h1>

        <p className="text-gray-400 mt-2">
          Get the latest deals, new arrivals, and exclusive offers delivered to your inbox.
        </p>
      </div>

      <div className="flex w-full md:w-auto items-center gap-3">

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={Click}
          className="w-full md:w-80 px-5 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          className=" px-6 py-3 bg-black hover:bg-orange-700 text-white font-semibold rounded-lg transition duration-300 whitespace-nowrap cursor-pointer"
        >
          Subscribe
        </button>

      </div>

    </div>

  </div>
</div>
  )
}
