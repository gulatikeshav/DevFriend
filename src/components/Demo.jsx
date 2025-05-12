import React from "react";

function Demo() {
  return (
    <div className="bg-[#F4BF37] mb-24 p-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">
          Ready for a Fresh Cut?
        </h1>
        <p className="text-lg text-white mb-8">
          Visit PMC Barbershop for premium men's grooming services. Our expert
          barbers are ready to give you a clean, precise cut and a relaxing
          barbershop experience.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-[#F4BF37] font-semibold py-3 px-6 rounded-md hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-[#F4BF37]">
            Book an Appointment
          </button>
          <button className="bg-gray-900 text-[#F4BF37] font-semibold py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
            View Our Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Demo;
