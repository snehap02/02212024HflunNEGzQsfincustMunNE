import React from "react";
import { portfolio } from "../pages/SellerDashboard/MockCardData";
import { Link } from "react-router-dom";

const SellerProfileContent = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-white pt-28 text-[54px] desc">
        Let Your Profile Stand Out !
      </h1>
      <button className="w-full px-48 mt-8">
        <div className="w-full h-20 flex justify-center items-center rounded-lg bg-gradient-to-r from-[#67FF81] via-white to-[#00FF2A] p-[2px] hover:transition-all hover:scale-105 hover:duration-200">
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
      <div className="portfolios mt-20">
        <h1 className="text-white name text-[24px] px-20">My Portfolio</h1>
        <div className="flex mt-10 gap-8 w-full px-20">
          {/* Project Cards Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="bg-[#004321] rounded-lg p-4 flex flex-col h-auto cursor-pointer hover:scale-105 transition-all text-white"
              >
                {/* Project Image */}
                <img
                  src={item.img}
                  alt="project"
                  className="object-cover w-full h-48 rounded-t-lg"
                />
                {/* Other Details */}
                <div className="flex flex-col mt-4">
                  {/* Title */}
                  <h1 className="text-base sm:text-lg font-semibold leading-6 h-[60px]">
                    {item.title}
                  </h1>
                  {/* Name and Level */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.person}
                        alt="person"
                        className="w-8 h-8 rounded-full"
                      />
                      <h2 className="text-sm sm:text-base">{item.name}</h2>
                    </div>
                    <h2 className="text-sm sm:text-base text-[#DAFF99]">
                      {item.level}
                    </h2>
                  </div>
                  {/* Delivery Time and Price */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.delivery}
                        alt="delivery"
                        className="w-5 h-5"
                      />
                      <h2 className="text-sm sm:text-base">
                        {item.deliveryTime}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm sm:text-base">Starting From</h2>
                      <p className="text-lg sm:text-xl font-bold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[36rem] bg-[#004321] rounded-lg flex justify-center items-center">
            <button>
              <Link to="/editgig">
                <img
                  src="../images/addCircle.svg"
                  alt="add"
                  className="opacity-40 w-20"
                />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-20">
        <button className="text-white name text-[20px] px-20 hover:underline hover:underline-offset-8 hover:decoration-[#326A3C] cursor-pointer">
          Become Agency
        </button>
      </div>
    </div>
  );
};

export default SellerProfileContent;
