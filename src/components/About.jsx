import React from "react";

const About = () => {
  return (
    <section className="text-white mb-24 " id="about">
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-[#F4BF37] font-semibold mb-2">Our Story</p>

        <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-2 border-b-[#F4BF37] ">
          About PMC Barbershop
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg text-justify">
          Established in 2018, PMC Barbershop has been providing premium
          grooming services to the men of Denton, TX. Our mission is to deliver
          exceptional haircuts and grooming services in a welcoming, classic
          barbershop environment.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image with badge */}
        <div className="relative">
          <img
            src="/about.webp"
            alt="PMC Barbershop Exterior"
            className="rounded-xl shadow-lg "
          />
          <div className="absolute bottom-4 right-4 text-white bg-[#F4BF37]  font-semibold px-4 py-1 rounded-2xl shadow-md">
            5+ years
          </div>
        </div>

        {/* Right - Text */}
        <div className="space-y-6">
          <p className="text-gray-400 border-l-4 border-[#F4BF37] pl-4 text-lg">
            Established in 2018, PMC Barbershop has been providing premium
            grooming services to the men of Denton, TX. Our mission is to
            deliver exceptional haircuts and grooming services in a welcoming,
            classic barbershop environment.
          </p>

          <div className="bg-gray-900 p-4 rounded-xl text-gray-400 text-lg italic shadow-inner">
            “We take pride in our attention to detail and personalized service,
            ensuring each client leaves looking and feeling their best. Our
            skilled barbers combine traditional techniques with modern trends to
            create custom styles that suit each individual's personality and
            lifestyle.”
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
