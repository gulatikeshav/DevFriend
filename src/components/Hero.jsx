import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="text-white w-full text-justify min-h-screen mb-24 flex flex-col gap-2 lg:flex-row justify-between items-center " id="home">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 max-w-2xl space-y-6 text-center lg:text-left">
        <p className="text-[#F4BF37] font-semibold text-sm md:text-base">
          Premium Barber Services in Denton
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Classic Cuts, Modern Style <br />
          <span className="text-[#F4BF37] underline decoration-yellow-500/50">
            Premium Barber Shop
          </span>
        </h1>
        <p className="text-gray-500 text-base md:text-lg">
          At PMC Barbershop, we combine traditional barbering techniques with
          modern styling to give you the perfect look. Our experienced barbers
          deliver precision cuts, beard grooming, and relaxing hot towel shaves
          in a classic barbershop atmosphere.
        </p>

        <div className="flex justify-center lg:justify-start">
          <span className="inline-flex items-center gap-2 mt-2 border border-gray-600 rounded-3xl px-4 py-1">
            <IoLocationOutline />
            <span className="text-sm text-gray-300">Denton, TX</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-md mx-auto lg:mx-0">
          <button className="bg-transparent border border-gray-500 text-white px-6 py-2 rounded-xl hover:bg-gray-800 flex-1 flex items-center justify-center gap-2 transition">
            <IoMdCall />
            <span>Our Services</span>
          </button>
          <button className="bg-[#F4BF37] text-black px-6 py-2 rounded-xl font-medium hover:bg-yellow-600 flex-1 flex items-center justify-center gap-2 transition">
            <IoMdCall />
            <span>Book Now</span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img
          src="https://pmcbarber.devfrend.com/images/pmcbarber/hero.webp"
          alt="Barbershop Team"
          className="rounded-xl shadow-lg w-full max-w-md shrink-0 sm:max-w-lg md:max-w-xl lg:max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
