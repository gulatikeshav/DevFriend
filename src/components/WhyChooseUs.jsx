import React from "react";

import { WHY_CHOOSE_US_FEATURES } from "../utils/constants";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0e0e0e] mb-24 py-20 text-white">
      <div className="text-center mb-16 px-4">
        <p className="text-[#F4BF37] font-semibold mb-2">Our Commitment</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose <span className="border-b-2 border-b-[#F4BF37]">PMC </span>{" "}
          Barbershop?
        </h2>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">
          What makes us the premier barbershop in Denton, TX.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {WHY_CHOOSE_US_FEATURES?.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] hover:border-[#F4BF37] transition-all duration-300 p-6 shadow-md hover:shadow-lg"
          >
            <div className="mb-6 w-12 h-12 rounded-xl bg-[#2d2d2d] flex items-center justify-center text-[#F4BF37]">
              {<item.icon className="size={20}" />}
            </div>

            <h3 className="text-lg font-semibold mb-3 text-white">
              {item.title}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {item.description}
            </p>

            <div className="absolute left-0 top-0 h-full w-1 bg-[#F4BF37]rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
