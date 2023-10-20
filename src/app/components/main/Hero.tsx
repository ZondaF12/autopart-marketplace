import React from "react";
import Image from "next/image";
import HeroImage from "../../../../public/Hero.jpg";

const Hero = () => {
    return (
        <header className="">
            <div
                className="w-full bg-center bg-cover h-[600px]"
                style={{
                    backgroundImage: `url(./Hero.jpg)`,
                }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
                    <div className="text-center">
                        <div className="container px-4 mx-auto">
                            <div className="max-w-4xl mx-auto text-center">
                                <span className="text-gray-200 font-semibold uppercase tracking-widest">
                                    EST. 2023
                                </span>
                                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                                    THE VEHICLE STYLING SHOP
                                </h2>

                                <a
                                    className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                                    href="#"
                                >
                                    View All Products
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
