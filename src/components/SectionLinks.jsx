import React from "react";
import { Link } from "react-router-dom";
import apparelImage from "../assets/products/Apparel/hxh-tee.jpg";
import accessoriesImage from "../assets/products/Keychains/goku-keychain.jpg";
import figuresImage from "../assets/products/Figures/ww-funko.jpg";

const SectionLinks = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl px-4 mt-8">
                {/* Apparel Section */}
                <Link to="/apparel" className="relative group">
                    <div className="relative w-40 h-40 mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                            <span className="text-white text-lg font-bold">Apparel</span>
                        </div>
                        <img
                            src={apparelImage}
                            alt="Apparel"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </Link>

                {/* Accessories Section */}
                <Link to="/accessories" className="relative group">
                    <div className="relative w-40 h-40 mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                            <span className="text-white text-lg font-bold">Accessories</span>
                        </div>
                        <img
                            src={accessoriesImage}
                            alt="Accessories"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </Link>

                {/* Figures Section */}
                <Link to="/figures" className="relative group">
                    <div className="relative w-40 h-40 mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                            <span className="text-white text-lg font-bold">Figures</span>
                        </div>
                        <img
                            src={figuresImage}
                            alt="Figures"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SectionLinks;