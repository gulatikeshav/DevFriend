import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FAQS } from "../utils/constants";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setActiveIndex(null);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setActiveIndex(null);
  };

  const filteredFAQs = FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["All", "General", "Services", "Pricing", "Support"];

  return (
    <div className="mb-24 ">
      <div className="max-w-3xl mx-auto text-center text-white">
        <p className="text-[#F4BF37] font-semibold mb-2">Common Questions</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="w-16 h-1 bg-[#F4BF37] mx-auto mb-10 rounded"></div>

        <p className="text-gray-400 text-base max-w-2xl mx-auto mb-8">
          Answers to common questions about our barbershop services.
        </p>

        <div className="relative mb-8">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for questions..."
            className="bg-[#232225] rounded-full py-3 pl-10 pr-4 w-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4BF37]"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="mb-8 flex justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`rounded-full py-2 px-4 text-sm font-semibold ${
                selectedCategory === cat
                  ? "bg-[#F4BF37] text-gray-900"
                  : "bg-[#232225] text-gray-300 hover:bg-gray-600"
              } focus:outline-none`}
              onClick={() => handleCategoryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div>
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-[#232225] rounded-lg shadow-md mb-4"
              >
                <button
                  className="w-full py-4 px-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span
                    className={`${
                      activeIndex === index ? "text-[#F4BF37]" : ""
                    }  "font-semibold text-gray-300"`}
                  >
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <AiOutlineUp className="text-gray-400" />
                  ) : (
                    <AiOutlineDown className="text-gray-400" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="py-4 px-6 border-t text-left border-gray-700 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-400">
              No questions found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faq;
