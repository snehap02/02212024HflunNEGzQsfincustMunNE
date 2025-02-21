import React from "react";

const BuyerProfileContent = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-white pt-28 text-[54px] desc">
        Let Freelancers Know What You Want!
      </h1>
      <button className="w-full flex justify-center items-center px-48 mt-10">
        <div className="w-[80%] h-20 flex justify-center items-center rounded-lg bg-gradient-to-r from-[#67FF81] via-white to-[#00FF2A] p-[2px] hover:transition-all hover:scale-110 hover:duration-200">
          <div className="w-full h-full bg-webBg rounded-lg flex justify-center gap-10 items-center">
            <img src="../images/AI.svg" alt="ai" />
            <h1 className="text-[28px] name bg-gradient-to-r from-[#67FF81] via-green-500 to-[#00FFF2] inline-block text-transparent bg-clip-text">
              Ask AI for suggestions
            </h1>
            <button>
              <img src="../images/go.svg" alt="go" />
            </button>
          </div>
        </div>
      </button>

      <button className="w-full flex justify-center items-center px-48 mt-16">
        <div className="w-[30%] h-16 flex justify-center items-center rounded-lg bg-gradient-to-r from-[#67FF81] via-white to-[#00FF2A] p-[2px]">
          <div className="w-full h-full bg-webBg rounded-lg flex justify-center gap-5 items-center">
            <img src="../images/AI.svg" alt="ai" />
            <h1 className="text-[17px] name bg-gradient-to-r from-[#67FF81] via-green-500 to-[#00FFF2] inline-block text-transparent bg-clip-text">
              Create Brief using AI
            </h1>
          </div>
        </div>
      </button>

      <h2 className="mt-5 text-[#61B870] name text-[17px]">
        Outline your project requirements and let AI create a concise brief for
        you.
      </h2>

      <div className="w-[80%] rounded-lg min-h-44 mt-20 border border-[#4B5736] px-10 py-6">
        <h1 className="text-white name text-[22px]">Previous Brief</h1>
        <div className="flex flex-col gap-4 mt-8">
          <div className="w-full h-20 rounded-lg bg-[#012619] shadow-lg flex px-5 text-white desc text-[15px] tracking-wide items-center">
            <h1>Design a Shopify dropshipping store with advanced product filters and a clean, minimal aesthetic within a $1200 budget.</h1>
          </div>
          <div className="w-full h-20 rounded-lg bg-[#012619] shadow-lg flex px-5 text-white desc text-[15px] tracking-wide items-center">
            <h1>Develop a React-based buyer homepage featuring a horizontally scrollable card slider and structured financial data, delivered in two weeks.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfileContent;
