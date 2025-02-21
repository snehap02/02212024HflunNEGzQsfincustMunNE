import React, { useState } from "react";
import { subCategoryOptions } from "../pages/SellerDashboard/MockCardData";

const OverviewSubcategory = () => {
  const [selectedSubcategoryOption, setSelectedSubcategoryOption] =
    useState(null);

  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);
  const handleSelectSubcategory = (option) => {
    setSelectedSubcategoryOption(option);
    setIsSubCategoryOpen(false);
  };
  return (
    <div>
      <div className="subcategory relative w-full name lg:text-lg">
        <button
          className="w-full bg-[#012619] text-white py-2 px-4 rounded-lg shadow-lg shadow-[#071B16] flex justify-between items-center lg:gap-16 mt-5 xl:px-10 xl:py-3"
          onClick={() => setIsSubCategoryOpen(!isSubCategoryOpen)}
        >
          {selectedSubcategoryOption || "Select a Subcategory"}
          <svg
            className={`w-6 h-6 transition-transform text-buttonHover ${
              isSubCategoryOpen ? "transform rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isSubCategoryOpen && (
          <ul className="absolute w-full bg-[#012619] mt-2 rounded-lg shadow-lg px-2 py-1 z-50 xl:px-6 xl:py-3 h-72 overflow-y-scroll scrollbar">
            {subCategoryOptions.map((option, index) => (
              <li
                key={index}
                className="py-2 px-4 hover:bg-forestGreen cursor-pointer rounded-lg"
                onClick={() => handleSelectSubcategory(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OverviewSubcategory;
