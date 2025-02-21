import React from "react";
import Editor from "../../components/Editor.js";
import FAQSection from "../../components/FAQSection";

const Description = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full sm:px-10 md:px-20 2xl:px-72">
      <div className="border border-[#253428] w-full h-[75vh] mt-10 rounded-lg overflow-x-auto scrollbar flex flex-col lg:items-center p-5 xl:px-16 gap-10 lg:gap-14 ">
        <div className="editor flex flex-col w-full gap-2 ml-2">
          <h2 className="text-[17px] bigText">Project Summary</h2>
          <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify lg:w-64">
            Describe Your Gig
          </h2>
          <Editor />
          <FAQSection />
        </div>
        {/* Next Button */}
        <div className="nextButton flex justify-end gap-6 items-end w-full -mt-16">
          <button className="px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px]">
            Previous
          </button>
          <button className="px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
