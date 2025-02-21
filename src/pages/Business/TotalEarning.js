import React, { useState } from "react";
import { days } from "../SellerDashboard/MockCardData";
import { Link } from "react-router-dom";

const TotalEarning = () => {
  const [selectedEarningOption, setSelectedEarningOption] = useState(null);
  const [isEarningOpen, setIsEarningOpen] = useState(false);

  const handleSelectEarning = (option) => {
    setSelectedEarningOption(option);
    setIsEarningOpen(false);
  };

  return (
    <div className="w-full min-h-[100vh] bg-webBg">
      <div className="xl:px-32">
        <div className="title text-white flex flex-col gap-4">
          <h1 className="name text-[28px] pt-24 text-white"> Your Earnings</h1>
          <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
        </div>

        <div className="fundsAndEarning flex justify-center items-center gap-20 mt-14">
          <div className="fundContainer flex flex-col gap-4">
            <div className="funds border border-[#DAFF99] w-[26rem] h-52 rounded-lg border-opacity-20 flex flex-col gap-4 justify-center items-center">
              <h1 className="text-[24px] text-white desc tracking-wide font-semibold mt-4">
                Available Funds
              </h1>
              <h1 className="text-[50px] text-white name tracking-wider">
                $800
              </h1>
            </div>
            <div className="flex justify-center items-center w-full">
              <Link to="/withdrawal" className="bg-[#007711] ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-3 px-20 rounded-lg text-[17px] desc tracking-wider w-full text-center">
                Withdraw Funds
              </Link>
            </div>
          </div>
          <div className="earningContainer flex flex-col gap-4">
            <div className="earnings border border-[#DAFF99] w-[26rem] h-52 rounded-lg border-opacity-20 flex justify-center items-center flex-col gap-4">
              <h1 className="text-[24px] text-white desc tracking-wide font-semibold mt-4">
                Total Earnings
              </h1>
              <h1 className="text-[50px] text-white name tracking-wider">
                $800
              </h1>
            </div>
            <div className="flex justify-center items-center w-full">
              <Link to="/billingAndPayment" className="bg-[#007711] ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-3 px-20 rounded-lg text-[17px] desc tracking-wider w-full text-center">
                See Total Expenses{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="otherData flex justify-between items-center mt-14">
          <div className="textAndPdf flex justify-center items-center gap-8">
            <div className="button flex justify-center items-center gap-5 bg-[#013316] p-4 rounded-lg cursor-pointer">
              <button className="text-[16px] text-white desc ">
                Download PDF
              </button>
              <img
                src="../images/downloadGraph.svg"
                alt="download"
                className="w-4"
              />
            </div>
          </div>

          <div className="dropdown">
            <div className="category relative w-[15rem] name lg:text-lg">
              <button
                className="w-full bg-[#013316] text-white py-2 px-4 rounded-lg shadow-lg shadow-[#071B16] flex justify-between items-center xl:px-5 xl:py-3"
                onClick={() => setIsEarningOpen(!isEarningOpen)}
              >
                {selectedEarningOption || "Select an Option"}
                <svg
                  className={`w-6 h-6 transition-transform text-buttonHover ${
                    isEarningOpen ? "transform rotate-180" : ""
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
              {isEarningOpen && (
                <ul className="optionList absolute w-full bg-[#013316] mt-2 rounded-lg shadow-lg px-2 py-1 z-50 xl:py-3 overflow-y-scroll scrollbar">
                  {days.map((option, index) => (
                    <li
                      key={index}
                      className="py-2 px-4 w-[14rem] hover:bg-forestGreen cursor-pointer rounded-lg text-white"
                      onClick={() => handleSelectEarning(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="tableData flex flex-col mt-4">
          <div className="mt-10 flex flex-col">
            <div className="border border-[#5E8664] rounded-lg">
              <div className="flex justify-between bg-[#21872F] text-white name tracking-wider p-5 text-center rounded-tl-md rounded-tr-md">
                <div className="w-1/4 font-semibold">DATE</div>
                <div className="w-1/4 font-semibold">SERVICE</div>
                <div className="w-1/4 font-semibold">CLIENT NAME</div>
                <div className="w-1/4 font-semibold">ORDER ID</div>
                <div className="w-1/4 font-semibold">PRICE $</div>
              </div>
              <div className="flex justify-between items-center text-white text-center px-5 py-5 desc text-[16px] pb-5">
                <div className="w-1/4">24/09/2024</div>
                <div className="w-1/4">Voice Over</div>
                <div className="w-1/4">Kunal Purkayastha</div>
                <div className="w-1/4">F02CA420FA42</div>
                <div className="w-1/4">$ 23</div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="mt-6 incometitle flex justify-end flex-col">
            <h1 className="flex justify-end text-white text-[20px] name">
              Total income (
              {selectedEarningOption
                ? `${selectedEarningOption}`
                : " "}
              )
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalEarning;
