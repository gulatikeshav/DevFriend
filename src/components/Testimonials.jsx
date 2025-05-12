import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../utils/constants";

function Testimonials() {
  return (
    <section className="text-white mb-24">
      <div className="max-w-7xl mx-auto  text-center ">
        <p className="text-[#F4BF37] text-sm font-semibold mb-1">
          Testimonials
        </p>
        <h2 className="text-4xl font-bold mb-2">What Our Clients Say</h2>
        <div className="w-16 h-1 bg-[#F4BF37] mx-auto mb-10 rounded"></div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {TESTIMONIALS?.map((t, idx) => (
            <div
              key={idx}
              className="relative max-w-7xl bg-[#232225] p-6 rounded-xl border h-96 border-gray-700 flex flex-col justify-between"
            >
              <p className="italic text-gray-300 my-4 text-left before:content-['“'] after:content-['”'] before:text-yellow-600 after:text-yellow-600 before:text-3xl text-lg after:text-3xl before:mr-1 after:ml-1">
                {t.text}
              </p>
              <div className="border-t border-gray-600 mt-6 pt-4 flex items-center justify-start">
                <div className="flex text-[#F4BF37]">
                  {[...Array(Math.floor(t.rating))].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                      className="mr-1"
                    />
                  ))}
                  {t.rating % 1 !== 0 && (
                    <Star
                      size={16}
                      fill="currentColor"
                      className="mr-1 opacity-50"
                    />
                  )}
                </div>
                <span className="ml-2 font-semibold text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
