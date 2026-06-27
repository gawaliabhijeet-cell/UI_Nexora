import React from 'react'
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div>
                        <h2 className="text-xl font-bold mb-5">Quick Links</h2>

                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-orange-500 cursor-pointer transition">
                                Shop
                            </li>
                            <li className="hover:text-orange-500 cursor-pointer transition">
                                About Us
                            </li>
                            <li className="hover:text-orange-500 cursor-pointer transition">
                                Contact
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-5">Customer Service</h2>

                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-orange-500 cursor-pointer transition">
                                Shipping Info
                            </li>
                            <li className="hover:text-orange-500 cursor-pointer transition">
                                Return Policy
                            </li>
                            <li className="hover:text-orange-500 cursor-pointer transition">
                                FAQs
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-5">Follow Us</h2>

                        <div className="flex gap-4">
                            <button className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition">
                                <FaFacebookF size={20} />
                            </button>

                            <button className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition">
                                <FaXTwitter size={20} />
                            </button>

                            <button className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition">
                                <FaInstagram size={20} />
                            </button>
                        </div>

                        <p className="text-gray-500 text-sm leading-6">
                            © 2026 <span className="text-white font-semibold">Nexora</span>. <br />
                            All Rights Reserved. <br />
                            Powered by Shopity.
                        </p>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                    © 2026 Nexora. All Rights Reserved.
                </div>

            </div>
        </footer>
    )
}
