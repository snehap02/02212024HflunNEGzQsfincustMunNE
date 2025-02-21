import React from "react";
import AddProject from "../../components/AddSteps";
import AddRequirements from "../../components/AddRequirements";

const Process = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full sm:px-10 md:px-20 2xl:px-72">
      <div className="border border-[#253428] w-full h-[75vh] mt-10 rounded-lg overflow-x-auto scrollbar flex flex-col p-5 xl:px-16 gap-10 lg:gap-14">
        <h2 className="text-[17px] lg:text-[22px] bigText">
          Project Workflow and Requirements
        </h2>
        <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify -mt-8 lg:-mt-[52px]">
          Streamlined workflow for clear progress and timely results.
        </h2>
        <div className="w-full h-[1px] bg-[#253428] -mt-8"></div>
        {/* add steps */}
        <AddProject />
        <div className="w-full h-[1px] bg-[#253428]"></div>
        {/* add requirements */}
        <AddRequirements />

        {/* Next Button */}
        <div className="nextButton flex justify-end gap-6 items-end w-full mt-8">
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

export default Process;
