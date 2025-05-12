import React from "react";
import { GALLERY_IMAGES } from "../utils/constants";

function ShopGallery() {
  return (
    <div className="mb-24" id="gallery">
      <div className="max-w-7xl mx-auto text-center text-white">
        <p className="text-[#F4BF37] font-semibold mb-2">Our Work & Shop</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Barbershop Gallery
        </h2>
        <div className="w-16 h-1 bg-[#F4BF37] mx-auto mb-10 rounded"></div>

        <p className="text-gray-400 text-base max-w-2xl mx-auto mb-6">
          Take a look at our shop atmosphere and the quality cuts we deliver to
          our clients.
        </p>

        {/* Mobile Carousel */}
        <div className="flex md:hidden gap-4 overflow-x-auto px-4 snap-x snap-mandatory">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={index}
              className="min-w-[80%] snap-start rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopGallery;
