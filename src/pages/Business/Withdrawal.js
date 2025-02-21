import React, { useState } from "react";
import { days } from "../SellerDashboard/MockCardData";

const Withdrawal = () => {
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
          <h1 className="name text-[28px] pt-24 text-white">
            {" "}
            Withdraw Your Earnings
          </h1>
          <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
        </div>

        <div className="fundsAndWithdrawal flex justify-between items-center gap-48 mt-14">
          <div className="fundContainer flex justify-between items-center gap-10 border border-[#DAFF99] w-full h-52 rounded-lg border-opacity-20 py-10 px-16">
            <div className="funds border-opacity-20 flex flex-col gap-4 justify-center w-[100%]">
              <h1 className="text-[24px] text-white desc tracking-wide font-semibold mt-4">
                Available Funds
              </h1>
              <h1 className="text-[50px] text-white name tracking-wider">
                $800
              </h1>
            </div>
            <div className="button flex flex-col gap-10 w-full">
              <button className="bg-[#007711] ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-3 px-20 rounded-lg text-[16px] desc tracking-wider w-full">
                Withdraw Now
              </button>
              <button className="name text-[17px] text-white underline underline-offset-8 decoration-[#49513B] cursor-pointer text-left">
                Schedule Automatic Withdrawal
              </button>
            </div>
          </div>

          <div className="withdrawContainer flex justify-between items-center gap-10 border border-[#DAFF99] w-full h-52 rounded-lg border-opacity-20 py-10 px-10">
            <div className="funds border-opacity-20 flex flex-col gap-4 justify-center w-[100%]">
              <div className="crud flex justify-end items-center gap-6">
                <button className="text-15px] desc text-[#67FF81]">Edit</button>
                <button className="text-15px] desc text-[#f86668]">
                  Remove
                </button>
              </div>
              <div className="flex justify-between items-center gap-10">
                <h1 className="text-[24px] text-white desc tracking-wide font-semibold w-full">
                  Withdraw Method
                </h1>
                <div className="line w-40 h-[1px] gap-10 bg-white"></div>
                <div className="otherDetails w-full flex flex-col gap-2">
                  <h1 className="desc text-[18px] text-[#359846]">
                    Local Bank Transfer
                  </h1>
                  <h1 className="desc text-[18px] text-[#98AC9B] w-full">
                    Account ending 6004 ( Preffered )
                  </h1>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="border rounded-lg border-[#647645] flex py-2 px-6 gap-3">
                  <img src="../images/addCircle.svg" alt="add" />
                  <h1 className="text-[16px text-white">Add More</h1>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="otherData flex justify-between items-center mt-14">
          <div className="textAndPdf flex justify-center items-center gap-8">
            <h1 className="name text-[20px] text-white">Total Withdrawals</h1>
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
                <ul className="absolute w-full bg-[#013316] mt-2 rounded-lg shadow-lg px-2 py-1 z-50 xl:py-3 overflow-y-scroll scrollbar">
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
                <div className="w-1/4 font-semibold">ACTIVITY</div>
                <div className="w-1/4 font-semibold">DESCRIPTION</div>
                <div className="w-1/4 font-semibold">FROM ID</div>
                <div className="w-1/4 font-semibold">ORDER</div>
                <div className="w-1/4 font-semibold">PRICE $</div>
              </div>
              <div className="flex justify-between items-center text-white text-center px-5 py-5 desc text-[16px] pb-5">
                <div className="w-1/4">24/09/2024</div>
                <div className="w-1/4">Clearing</div>
                <div className="w-1/4">Order will clear in 3 days</div>
                <div className="w-1/4">username1</div>
                <div className="w-1/4">F02CA420FA42</div>
                <div className="w-1/4">$21.26</div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="mt-6 incometitle flex justify-end flex-col">
            <h1 className="flex justify-end text-white text-[20px] name">
              Total income (
              {selectedEarningOption ? `${selectedEarningOption}` : " "})
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
