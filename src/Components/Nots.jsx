import React from "react";

export default function Notes() {
    return (
        <section className="w-full py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative overflow-hidden rounded-3xl">

                    <img
                        src="https://i.pinimg.com/736x/7e/76/f6/7e76f68c3ab9855c018e82c70e9f7636.jpg"
                        alt="Accessories"
                        className="w-full h-100 object-cover"
                    />

                    <div className="absolute inset-0 bg-black/50"></div>

                    <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">

                        <p className="text-orange-400 uppercase tracking-widest font-semibold">
                            Accessories Collection
                        </p>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mt-3 leading-tight">
                            Boost Your
                            <br />
                            Productivity
                        </h1>

                        <p className="text-gray-200 text-lg mt-5 max-w-lg">
                            Essential accessories for work, gaming, and everyday life.
                            Discover keyboards, mice, headphones, chargers, and more.
                        </p>

                        <button className="mt-8 w-fit bg-black hover:bg-orange-700 text-white font-semibold px-8 py-3 transition duration-300">
                            Browse Now 
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}