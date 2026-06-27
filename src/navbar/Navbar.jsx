import React from "react";
import { Search, ShoppingCart, MapPin } from "lucide-react";
import logo from "../pic/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-black text-white h-20">
      <div className="p-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-30 w-auto object-contain cursor-pointer"
            />
          </div>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-20 font-medium text-gray-300">
            <li className="cursor-pointer hover:text-orange-700 transition duration-300">
              Shop
            </li>
            <li className="cursor-pointer hover:text-orange-700 transition duration-300">
              New Arrivals
            </li>
            <li className="cursor-pointer hover:text-orange-700 transition duration-300">
              Best Sellers
            </li>
            <li className="cursor-pointer hover:text-orange-700 transition duration-300">
              About
            </li>
            <li className="cursor-pointer hover:text-orange-700 transition duration-300">
              Contact
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <button className="cursor-pointer p-2 rounded-full hover:bg-orange-700 transition">
              <Search size={22} />
            </button>

            <button className="cursor-pointer p-2 rounded-full hover:bg-orange-700 transition">
              <MapPin size={22} />
            </button>

            <button className="cursor-pointer relative p-2 rounded-full hover:bg-orange-700 transition">
              <ShoppingCart size={22} />

              {/* Cart Badge */}
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center">
                5
              </span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}