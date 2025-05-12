import React from "react";
import { OUR_SERVICES } from "../utils/constants";

const Service = () => {
  return (
    <section className="text-white py-16 mb-24 bg-[#0e0e0e]" id="services">
      <div className="text-center mb-16">
        <p className="text-[#F4BF37] font-semibold mb-2 tracking-wide">
          Premium Grooming
        </p>
        <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-2 border-[#F4BF37] pb-1">
          Our Barber Services
        </h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg">
          Professional barbering services to keep you looking sharp for everyday
          confidence or special occasions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {OUR_SERVICES?.map((service, idx) => (
          <div
            key={idx}
            className="group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#F4BF37] rounded-2xl p-6 transition duration-300 shadow-md hover:shadow-xl"
          >
            <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-[#222]">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-8 h-8 object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white">
              {service.title}
            </h3>

            <p className="text-gray-400  mb-4 leading-relaxed">
              {service.description}
            </p>

            <ul className="list-disc list-inside text-gray-400  space-y-1">
              {service.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
