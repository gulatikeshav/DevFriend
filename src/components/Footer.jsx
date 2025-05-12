import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className=" text-gray-300 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src="/logo.webp" alt="Company Logo" className="h-8 mb-4" />{" "}
          <p className="text-sm text-gray-400 mb-4">
            Classic cuts with modern style.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-[#F4BF37] hover:bg-yellow-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="#"
              className="bg-[#F4BF37] hover:bg-yellow-500 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <FaFacebookF className="text-lg" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#F4BF37]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F4BF37]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F4BF37]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F4BF37]">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F4BF37]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <MdLocationOn className="text-[#F4BF37] mr-2" />
              <span>518 Acme St unit 101, Denton, TX 76205, United States</span>
            </li>
            <li className="flex items-center">
              <MdPhone className="text-[#F4BF37] mr-2" />
              <span>+19408081569</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter to receive updates and news.
          </p>
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 w-full text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-[#F4BF37] hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F4BF37]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} PMC Barbershop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
