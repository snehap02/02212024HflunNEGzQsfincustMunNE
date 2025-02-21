import React from "react";

const LevelOverview = () => {
  const currentLevel = 3;
  return (
    <div className="w-full min-h-[100vh] bg-webBg flex flex-col md:flex-row">
      <div className="sidebar flex md:flex-col flex-row items-center md:w-[250px] xl:w-[590px] bg-[#002915] md:overflow-y-auto md:overflow-x-hidden overflow-x-scroll no-scrollbar scrollbarNew z-20 md:h-[100vh] pt-28">
        <img src="../images/DP.svg" alt="profilepic" className="w-36" />
        <h1 className="mt-8 name text-[24px] text-white tracking-wider">
          Hey, Debarun!
        </h1>
        <h2 className="mt-3 text-[20px] text-[#17bd32] desc">
          Here’s your progress
        </h2>
        <div className="levels flex flex-col mt-12">
          {[1, 2, 3, 4, 5].map((level, index) => (
            <div key={level} className="relative flex flex-col items-center">
              {/* Circle */}
              <div
                className={`flex items-center gap-10 ${
                  level <= currentLevel ? "text-[#17bd32]" : "text-[#6B8F71]"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex justify-center items-center ${
                    level <= currentLevel
                      ? "bg-[#086b19]"
                      : "border-2 border-[#6B8F71]"
                  }`}
                >
                  {level <= currentLevel && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-[22px] tracking-wide name font-medium ${
                    level <= currentLevel ? "text-[#F1FFD9]" : "text-[#6B8F71]"
                  }`}
                >
                  Level {level}
                </span>
              </div>
              {/* Line */}
              {index < 4 && ( // Ensure the line is not added after the last circle
                <div
                  className={`w-1 h-12 -ml-[7.2rem] ${
                    level < currentLevel ? "bg-[#326A3C]" : "bg-[#1d3f23]"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="detailsSection flex flex-col w-full px-36">
        <div className="title text-white flex flex-col gap-4 w-full mt-10">
          <h1 className="levelNum name text-[28px] pt-24 text-white">
            {" "}
            Your Current level - {currentLevel}
          </h1>
          <div className="h-[1px] w-full bg-[#6B8F71] opacity-40 mt-4"></div>
        </div>
        <div className="texts flex flex-col mt-6">
          <h1 className="desc text-[24px]  pt-4 text-white">
            {" "}
            Qualification for next level :
          </h1>
          <h2 className="mt-2 desc text-[18px] text-[#17bd32]">
            Wohoo!! Your are almost there!
          </h2>
        </div>
        <div className="cards flex justify-evenly gap-32 items-center mt-14">
          <div className="orders bg-[#012619] w-full h-48 rounded-lg shadow-lg flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[#F1FFD9] name text-[22px]">Orders</h2>
            <h1 className="name text-white text-[36px]">3/10</h1>
          </div>

          <div className="w-full h-48 relative">
            <div className="w-full relative h-48 bg-[#012619] rounded-tl-lg rounded-tr-lg rounded-bl-xl rounded-br-xl z-50 flex flex-col justify-center items-center">
              <h2 className="text-[#F1FFD9] name text-[22px]">
                On-Time-Delivery
              </h2>
              <h1 className="name text-white text-[36px]">80%</h1>
            </div>
            <div className="absolute w-full h-48 bg-[#15571d] -mt-36 rounded-bl-lg rounded-br-lg flex justify-center items-end">
              <h2 className="text-white name tracking-wide text-[22px] py-3 ">
                Maintain 90%
              </h2>
            </div>
          </div>

          <div className="earnings bg-[#012619] w-full h-48 rounded-lg shadow-lg flex flex-col gap-4 justify-center items-center">
            <h2 className="text-[#F1FFD9] name text-[22px]">Earnings</h2>
            <h1 className="name text-white text-[36px]">$800/1000</h1>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40 mt-20"></div>
        <div className="benefits mt-14">
          <h1 className="name text-[26px] text-white">Benefits You Get :</h1>
        </div>
      </div>
    </div>
  );
};

export default LevelOverview;
