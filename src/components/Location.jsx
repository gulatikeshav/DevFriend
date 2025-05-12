import React from "react";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { IoCall, IoLocationOutline } from "react-icons/io5";

function Location() {
  return (
    <div className="mb-24">
      <div className="max-w-7xl mx-auto text-center text-white">
        <p className="text-[#F4BF37] font-semibold mb-2">Visit Our Shop</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
        <div className="w-16 h-1 bg-[#F4BF37] mx-auto mb-10 rounded"></div>

        <p className="text-gray-400 text-base max-w-2xl mx-auto mb-6">
          Conveniently located in Denton, TX.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0  ">
          <div className="rounded-lg overflow-hidden shadow-md flex items-center justify-center bg-[#232225] h-96">
            <IoLocationOutline className="text-[#F4BF37] text-6xl" />
          </div>

          {/* Contact Information */}

          <div className="bg-[#232225] rounded-lg shadow-md p-6 text-left h-96 flex flex-col justify-between ">
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>

            <div className="mb-6 space-y-3 flex flex-col justify-between ">
              <div className="flex items-start hover:bg-gray-600 hover:rounded-2xl p-2 ">
                <IoLocationOutline className="text-[#F4BF37] w-6 h-6 mr-3 mt-1" />
                <div>
                  <h5 className="font-semibold ">Address</h5>
                  <p className="text-gray-300 text-sm">
                    518 Acme St unit 101, Denton, TX 76205, United States
                  </p>
                </div>
              </div>

              <div className="flex items-start hover:bg-gray-600 hover:rounded-2xl p-2 ">
                <FaPhoneAlt className="text-[#F4BF37] w-5 h-5 mr-3 mt-1" />

                <div>
                  <h5 className="font-semibold">Phone</h5>
                  <p className="text-gray-300 text-sm">+1 (940) 808-1569</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-[#F4BF37] text-gray-900 font-semibold py-2 px-4 rounded-md flex items-center">
                <FaLocationArrow className="w-5 h-5 mr-2" />
                Get Directions
              </button>
              <button className="bg-transparent border border-gray-700 text-gray-300 font-semibold py-2 px-4 rounded-md flex items-center">
                <IoCall className="w-5 h-5 mr-2" />
                Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
