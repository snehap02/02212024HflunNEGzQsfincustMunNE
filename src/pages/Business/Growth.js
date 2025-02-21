import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { statsData, days } from "../SellerDashboard/MockCardData";
import { Link } from "react-router-dom";

const Growth = () => {
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectDropdown = (option) => {
    setSelectedDropdownOption(option);
    setIsDropdownOpen(false);
  };

  const data = [
    { date: "Oct 1", value: 180 },
    { date: "Oct 8", value: 100 },
    { date: "Oct 15", value: 50 },
    { date: "Oct 20", value: 75 },
    { date: "Oct 22", value: 120 },
    { date: "Oct 24", value: 80 },
    { date: "Oct 28", value: 30 },
    { date: "Oct 30", value: 10 },
  ];

  const formatDollar = (value) => `$${value}`;

  return (
    <div className="w-full min-h-[100vh] bg-webBg flex flex-col">
      <div className="xl:px-32">
        <h1 className="name text-[28px] pt-24 text-white">Your Analytics</h1>
      </div>

      <div className="analyticsChart flex gap-4 p-4 rounded-lg justify-between px-32 mt-6">
        <Link to="/totalearning" className="totalEarning flex flex-col items-center justify-center bg-[#21872F] text-[#F1FFD9] rounded-lg w-64 h-36 shadow-lg shadow-[#0d1612]">
          <div className="text-[19px] desc tracking-wide font-semibold mt-4">
            Total Earnings
          </div>
          <div className="text-[36px] desc tracking-wider mt-5 font-bold bg-[#012619] w-full h-full rounded-tl-2xl rounded-tr-2xl rounded-bl-lg rounded-br-lg flex justify-center items-center">
            $180
          </div>
        </Link>
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#21872F] text-[#F1FFD9] rounded-lg w-64 h-36 shadow-lg shadow-[#0d1612]"
          >
            <div className="text-[19px] desc tracking-wide font-semibold mt-4">
              {stat.label}
            </div>
            <div className="text-[36px] desc tracking-wider mt-5 font-bold bg-[#012619] w-full h-full rounded-tl-2xl rounded-tr-2xl rounded-bl-lg rounded-br-lg flex justify-center items-center">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="otherData flex justify-between items-center px-36 mt-14">
        <div className="textAndPdf flex justify-center items-center gap-5">
          <h1 className="name text-[24px] text-white">Overview</h1>
          <div className="button flex gap-5 w-full bg-[#013316] p-4 rounded-lg cursor-pointer">
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
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedDropdownOption || "Select an Option"}
              <svg
                className={`w-6 h-6 transition-transform text-buttonHover ${
                  isDropdownOpen ? "transform rotate-180" : ""
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
            {isDropdownOpen && (
              <ul className="absolute w-full bg-[#013316] mt-2 rounded-lg shadow-lg px-2 py-1 z-50 xl:py-3 overflow-y-scroll scrollbar">
                {days.map((option, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 w-[14rem] hover:bg-forestGreen cursor-pointer rounded-lg text-white"
                    onClick={() => handleSelectDropdown(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="graph px-32 mt-14 h-[40vh]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#21872F" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#21872F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" stroke="#F1FFD9" />
            <YAxis stroke="#F1FFD9" tickFormatter={formatDollar} />
            <CartesianGrid strokeDasharray="3 3" stroke="#0d1612" />
            <Tooltip formatter={(value) => [`$${value}`, "Value"]} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#21872F"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="xl:px-32 mb-40">
        <h1 className="name text-[28px] pt-24 text-white">AI-powered tools</h1>
      </div>
    </div>
  );
};

export default Growth;
