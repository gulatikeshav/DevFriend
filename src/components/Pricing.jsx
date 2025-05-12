import React from "react";
import { FaCheck } from "react-icons/fa";
import { SERVICE_DATA } from "../utils/constants";

function Pricing() {
  return (
    <section className=" mb-24">
      <div className="max-w-7xl mx-auto text-center text-white px-4">
        <p className="text-[#F4BF37] font-semibold mb-2">
          {" "}
          Quality Barbering at Fair Prices
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Service Prices
        </h2>
        <div className="w-16 h-1 bg-[#F4BF37] mx-auto mb-10 rounded"></div>

        <p className="text-gray-400 text-base max-w-2xl mx-auto mb-6">
          Choose from our range of professional barbering services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8">
          {SERVICE_DATA?.map(({ title, price, badge, features }, index) => (
            <div
              key={index}
              className="bg-[#232225]  rounded-lg shadow-md p-6 text-left relative"
            >
              {badge && (
                <span className="absolute top-4 right-4 bg-[#F4BF37] text-gray-900 text-xs font-semibold py-1 px-2 rounded">
                  {badge}
                </span>
              )}
              <h4 className="text-xl font-semibold mb-4">{title}</h4>
              <div className="text-4xl font-bold text-[#F4BF37] mb-4">
                $<span className="text-4xl align-top">{price}</span>
                <span className="text-sm text-gray-400">/mo</span>
              </div>
              <ul className="text-gray-300 space-y-2 mt-8">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center my-8">
                    {/* <FaCheck className="w-5 h-5 mr-2  text-yellow-400" /> */}
                    <div className="w-6 h-6 rounded-full bg-[#F4BF37] flex items-center justify-center mr-2">
                      <FaCheck className="text-black text-sm" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="#"
                  className="block w-full py-3 px-5 rounded-md shadow-md text-center font-medium text-black bg-[#F4BF37] hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F4BF37]"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
