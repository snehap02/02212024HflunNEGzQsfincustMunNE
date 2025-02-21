import React, { useState } from "react";
import { projectDetails } from "../SellerDashboard/MockCardData";
import SellerJobDetails from "../../components/SellerJobDetails";
import Editor from "../../components/Editor";
import { Link } from "react-router-dom";

const ApplyJobsSeller = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index); // Update the selected card index
  };

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [price, setPrice] = useState("");

  const currencySymbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    PKR: "Rs.",
  };

  const countryNames = [
    { code: "USD", name: "United States" },
    { code: "INR", name: "India" },
    { code: "EUR", name: "Europe" },
    { code: "GBP", name: "United Kingdom" },
    { code: "JPY", name: "Japan" },
    { code: "PKR", name: "Pakistan" },
  ];

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handlePriceChange = (e) => {
    const input = e.target.value;
    if (/^\d*\.?\d*$/.test(input)) {
      setPrice(input);
    }
  };
  return (
    <div className="w-full min-h-[100vh] bg-webBg flex flex-col pb-24">
      <div className="titleAndLine px-36 flex flex-col">
        <div className="flex gap-6 items-center">
          <h1 className="name text-[32px] pt-24 text-white">
            Submit a Proposal
          </h1>
          <h2 className="pt-28 desc text-[17px] text-[#37ca50]">
            ( 8 silver coins needed )
          </h2>
        </div>
        <div className="w-full h-[1px] bg-[#6B8F71] bg-opacity-40 mt-5"></div>
      </div>
      <div className="selectGigs px-36 mt-6">
        <h1 className="text-[24px] name text-white">Select Gig</h1>
        <div className="gig-cards mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 text-white">
            {projectDetails.map((item, index) => (
              <div
                key={index}
                className={`gigCard bg-[#004321] rounded-lg p-4 flex flex-col h-auto cursor-pointer hover:scale-105 transition-all ${
                  selectedCardIndex !== null && selectedCardIndex !== index
                    ? "blur-sm opacity-50"
                    : ""
                }`}
                onClick={() => handleCardClick(index)} // Handle click
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
        </div>
        <div className="w-full h-[1px] bg-[#6B8F71] bg-opacity-40 mt-10"></div>
      </div>
      <div className="formDetails px-36 mt-6">
        <h1 className="head text-[24px] name text-white">Job Details</h1>
        <div className="details">
          <SellerJobDetails />
        </div>
        <div className="-mt-10 text-white text-[17px] name underline underline-offset-8 cursor-pointer">
          Enjoy 0% Service fee
        </div>
        <div className="w-full h-[1px] bg-[#6B8F71] bg-opacity-40 mt-6"></div>
      </div>
      <div className="form px-36 mt-10">
        <div className="bid flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:gap-10 xl:gap-24">
          <div className="title flex flex-col gap-2 w-[50%]">
            <h2 className="text-[17px] bigText text-white">Bid for this Job</h2>
          </div>
          <div className="budgetInput w-full">
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-lg shadow-lg w-full">
                <div className="relative bg-[#012619] flex items-center rounded-lg">
                  {/* Currency Symbol */}
                  <span className="text-[#012619] px-5 py-3 name rounded-tl-lg rounded-bl-lg text-[24px] mr-2 bg-[#DAFF99]">
                    {currencySymbols[selectedCurrency]}
                  </span>

                  {/* Price Input */}
                  <input
                    type="text"
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="0.00"
                    className="flex-1 outline-none text-lg bg-[#012619] text-white desc px-5"
                  />

                  {/* Currency Selector */}
                  <select
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                    className="bg-[#DAFF99] px-5 py-3 cursor-pointer text-[18px] text-[#012619] focus:outline-none rounded-tr-lg rounded-br-lg name"
                  >
                    {countryNames.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="totalAmount">
          <div className="title flex gap-6 items-center w-[50%] mt-6">
            <h2 className="text-[17px] bigText text-white">You’ll Receive</h2>
            <h1 className="text-[20px] text-white name">$20</h1>
          </div>
        </div>

        <div className="coverLetter flex gap-24 mt-10 text-white">
          <div className="title flex flex-col gap-2 w-[50%]">
            <h2 className="text-[17px] bigText text-white">Cover Letter</h2>
          </div>
          <Editor />
        </div>
      </div>
      <div className="submitBtn flex justify-end gap-6 items-end w-full px-36 mt-20">
        <button className="px-16 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px] text-white">
          <Link to="/gig">Submit</Link>
        </button>
      </div>
    </div>
  );
};

export default ApplyJobsSeller;
