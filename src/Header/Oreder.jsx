import React from 'react'
import { CircleCheckBig,UsersRound ,CircleDollarSign } from 'lucide-react';


export default function Oreder() {
  return (
 <div className="w-full bg-black border-b border-gray-800">
  <div className="max-w-7xl mx-auto px-6 py-4">

    <div className="flex items-center justify-between gap-16">

      {/* Free Shipping */}
      <div className="flex items-center gap-3">
        <div className="bg-cyan-500/20 p-2 rounded-full">
          <CircleCheckBig className="text-cyan-400" size={24} />
        </div>

        <div>
          <h3 className="text-white font-semibold">Free Shipping</h3>
          <p className="text-sm text-gray-400">On orders over $50</p>
        </div>
      </div>

      {/* Money Back */}
      <div className="flex items-center gap-3">
        <div className="bg-green-500/20 p-2 rounded-full">
          <CircleDollarSign className="text-green-400" size={24} />
        </div>

        <div>
          <h3 className="text-white font-semibold">Money Back</h3>
          <p className="text-sm text-gray-400">30-Day Guarantee</p>
        </div>
      </div>

      {/* Support */}
      <div className="flex items-center gap-3">
        <div className="bg-orange-500/20 p-2 rounded-full">
          <UsersRound className="text-orange-400" size={24} />
        </div>

        <div>
          <h3 className="text-white font-semibold">24/7 Support</h3>
          <p className="text-sm text-gray-400">Friendly customer service</p>
        </div>
      </div>

    </div>

  </div>
</div>
  )
}
