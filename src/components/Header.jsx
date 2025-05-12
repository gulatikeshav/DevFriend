import React, { useState } from "react";
import { Phone, Globe, User, Menu, X } from "lucide-react";
import { FaPalette } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white shadow-md w-full bg-black z-50 sticky top-0">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4 w-full">
        <div className="flex items-center min-w-[80px]">
          <a href="#home">
            <img
              src="/logo.webp"
              alt="PMC Logo"
              className="h-10 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-sm lg:text-base font-medium space-x-4">
          <a href="#home" className="hover:text-[#F4BF37] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#F4BF37] transition">
            About
          </a>
          <a href="#services" className="hover:text-[#F4BF37] transition">
            Services
          </a>
          <a href="#gallery" className="hover:text-[#F4BF37] transition">
            Gallery
          </a>
          <a href="#contact" className="hover:text-[#F4BF37] transition">
            Contact
          </a>
        </nav>

        {/* Right Controls (desktop only) */}
        <div className="hidden lg:flex items-center space-x-3 text-sm shrink-0 ">
          <FaPalette className="w-5 h-5 cursor-pointer hover:text-[#F4BF37]" />
          <Globe className="w-5 h-5 cursor-pointer hover:text-[#F4BF37]" />
          <User className="w-5 h-5 cursor-pointer hover:text-[#F4BF37]" />
          <a
            href="tel:+19408081569"
            className="flex items-center hover:text-[#F4BF37]"
          >
            <Phone className="w-4 h-4 mr-1" />
            +1 940 808 1569
          </a>
          <button className="bg-[#F4BF37] text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-500 transition">
            Book an Appointment
          </button>
        </div>

        {/* Hamburger Menu (mobile only) */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-end">
          <div className="bg-[#121212] w-72 h-full px-6 py-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <img src="/logo.webp" alt="PMC Logo" className="h-10" />
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <p className="text-[#F4BF37] font-semibold mb-4">Menu</p>
            <nav className="flex flex-col gap-6 text-lg">
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </nav>

            <div className="mt-auto space-y-4">
              <div className="flex items-center gap-2 text-[#F4BF37] text-sm border border-[#F4BF37] px-4 py-2 rounded-lg">
                <Phone className="w-4 h-4" />
                <a href="tel:+19408081569">+1 940 808 1569</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
