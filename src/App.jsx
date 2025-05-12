import React from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";
import OurBarbers from "./components/OurBarbers.jsx";
import Faq from "./components/Faq.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Demo from "./components/Demo.jsx";
import Footer from "./components/Footer.jsx";
import ShopGallery from "./components/ShopGallery.jsx";
import Pricing from "./components/Pricing.jsx";
import Service from "./components/Service.jsx";
import Location from "./components/Location.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

const App = () => {
  return (
    <div className="w-screen h-full md:px-10 md:py-4  px-2 lg:px-16 lg:py-4 bg-gray-950 ">
      <Header />
      <HeroSection />
      <About />
      <Service />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <ShopGallery />
      <OurBarbers />
      <Location />
      <Faq />
      <ContactUs />
      <Demo />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
