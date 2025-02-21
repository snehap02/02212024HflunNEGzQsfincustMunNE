import React from "react";

const TaxInformation = () => {
  return (
    <div className="whole-container px-5 2xl:px-[20rem] 2xl:-ml-56 left-0 h-[96vh] overflow-y-scroll scrollbarNew">
      <div className="title mt-8 md:mt-20 2xl:mt-28 text-white flex flex-col gap-6">
        <h1 className="text-[18px] lg:text-[24px] tracking-wide name">
          Tax Information
        </h1>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>

        <h1 className="text-[19px] text-[#45be59] desc">
          If you’re an Indian citizen, please fill in your details for PAN
          verification.{" "}
        </h1>
      </div>
      <div className="info mt-8">
        <div className="flex flex-col gap-6 border border-[#4B5736] rounded-lg px-4 py-2">
          <div className="PANDetails mt-6 text-white flex flex-col gap-6">
            <div className="flex gap-4">
              <img src="../images/PAN.svg" alt="PanCard" />
              <h1 className="text-[15px] md:text-[16px] tracking-wide name">
                PAN Card
              </h1>
            </div>

            <input
              type="text"
              className="bg-[#012619] rounded-md w-[50%] h-14 px-4 desc shadow-lg focus:outline-none placeholder:text-[#6B8F71]"
              placeholder="Enter PAN Number"
            />
          </div>
          <div className="DOBDetails mt-6 text-white flex flex-col gap-6 pb-10">
            <div className="flex gap-4 items-center">
              <img src="../images/DOB.svg" alt="PanCard" />
              <h1 className="text-[15px] md:text-[16px] tracking-wide name">
                Date of Birth
              </h1>
            </div>

            <input
              type="text"
              className="bg-[#012619] rounded-md w-[50%] h-14 px-4 desc shadow-lg focus:outline-none placeholder:text-[#6B8F71]"
              placeholder="Enter Date of Birth"
            />
          </div>
        </div>

        <div className="finalStatement flex justify-between items-center mt-10">
          <div className="flex items-center gap-3 w-full">
            <input type="checkbox" className="w-5 h-5" />
            <h1 className="desc text-white">
              I, declare that I am an Indian citizen.
            </h1>
          </div>
          <div className="w-full flex justify-end">
            <button className="mt-3 px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px] name flex justify-between items-center gap-3 text-white">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxInformation;
