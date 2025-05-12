import React from "react";
import { BARBERS } from "../utils/constants";

function OurBarbers() {
  return (
    <div className="mb-24">
      <div className="max-w-7xl mx-auto text-center text-white px-4">
        <p className="text-[#F4BF37] font-semibold mb-2"> Expert Stylists</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet Our Barbers
        </h2>
        <div className="w-16 h-1 bg-[#F4BF37] mx-auto mb-10 rounded"></div>

        <p className="text-gray-400 text-base max-w-2xl mx-auto mb-6">
          Our team of skilled barbers is dedicated to providing you with the
          perfect cut and grooming experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BARBERS?.map((barber, index) => (
            <div
              key={index}
              className="bg-[#232225] rounded-lg shadow-md p-6 text-center hover:border-2 hover:border-[#F4BF37]
               hover:text-[#F4BF37] transition"
            >
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold mb-1 ">{barber.name}</h4>
              <p className="text-sm text-[#F4BF37] mb-2">{barber.title}</p>
              <p className="text-gray-300 hover:text-gray-300  text-sm">
                {barber.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurBarbers;


