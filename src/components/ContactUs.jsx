import React from "react";
import { MdLocationOn, MdPhone, MdAccessTime } from "react-icons/md";

function ContactUs() {
  return (
    <div className="bg-[#121212] min-h-screen mb-24 px-4 " id="contact">
      <div className="max-w-7xl mx-auto text-white">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-base font-semibold mb-2 text-[#F4BF37]">
            Book Your Appointment
          </p>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="w-16 h-1 bg-[#F4BF37] mx-auto mb-1 rounded"></div>

          <p className="text-lg text-gray-300">
            Ready for a fresh look? Book your appointment today or contact us
            for any questions.
          </p>
        </div>

        {/* Contact + Form Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="flex-1 bg-[#232225]  rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#F4BF37] rounded-full p-2 mr-4">
                  <MdLocationOn className="text-gray-900 text-xl" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Address</h5>
                  <p className="text-gray-400 text-sm">
                    518 Acme St unit 101, Denton, TX 76205, United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#F4BF37] rounded-full p-2 mr-4">
                  <MdPhone className="text-gray-900 text-xl" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Phone</h5>
                  <p className="text-gray-400 text-sm">+19408081569</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#F4BF37] rounded-full p-2 mr-4">
                  <MdAccessTime className="text-gray-900 text-xl" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">
                    Business Hours
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Mon-Fri: 9:00 AM - 7:00 PM
                  </p>
                  <p className="text-gray-400 text-sm">
                    Sat: 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-400 text-sm">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="flex-2 bg-[#232225]  rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold mb-6 text-white">
              Book an Appointment
            </h4>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-[#232225]  border border-gray-600 rounded-md py-2 px-3 w-full text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F4BF37]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-300 text-sm font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-[#232225] border border-gray-600 rounded-md py-2 px-3 w-full text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F4BF37]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-gray-300 text-sm font-medium mb-1"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="bg-[#232225] border border-gray-600 rounded-md py-2 px-3 w-full text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F4BF37]"
                >
                  <option value="">Select an option</option>
                  <option value="haircut">Men's Haircut</option>
                  <option value="beard-trim">Beard Trim</option>
                  <option value="hot-shave">Hot Towel Shave</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-gray-300 text-sm font-medium mb-1"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="bg-[#232225]  border border-gray-600 rounded-md py-2 px-3 w-full text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F4BF37]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="bg-[#232225]  border border-gray-600 rounded-md py-2 px-3 w-full text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F4BF37]"
                  placeholder="Tell us about your style preferences or any questions you have"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#F4BF37] w-full text-gray-900 font-semibold py-3 px-6 rounded-md hover:bg-[#e5ae30] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
