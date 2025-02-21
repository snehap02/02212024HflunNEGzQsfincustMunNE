import React, { useEffect, useState } from "react";
import CashFreeButton from "./CashFree"; // Assuming you have the PayPal button component
import { useNavigate, useRevalidator } from "react-router-dom";

// import { settingsTab } from "../SellerDashboard/MockCardData"; // Assuming this is an array of tab names
// import { Link } from "react-router-dom";
// import AccountInformation from "./AccountInformation";
// import CoinsAndMembership from "./CoinsAndMembership";
// import Notification from "./Notification";
// import KYC from "./KYC";
// import BankAccount from "./BankAccount";
// import TaxInformation from "./TaxInformation";
import PaymentCards from "./PaymentCards";

const PaymentMethodFilling = () => {

  const [selectedOption, setSelectedOption] = useState(null); // Track selected payment method
  const navigate = useNavigate();

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.id); // Set selected option based on the radio button clicked
  };

  return (
    <div className="flex bg-webBg h-[90%]">
      <div className="px-5 2xl:px-28 left-0 h-[90%] bg-webBg w-full pt-4">
        <div className="title mt-20 text-white flex flex-col gap-6 ">
          <h1 className="text-[18px] lg:text-[24px] tracking-wide name">
            Bank Account
          </h1>
          <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
        </div>

        <div className="billingMethod mt-6">
          <div className="flex flex-col gap-6 rounded-lg px-4 py-10 h-96">
            {/* <div className="billingBox flex gap-6 border border-[#4B5736] rounded-lg w-[40%] justify-center items-center py-8 cursor-pointer">
              <img src="../images/bill.svg" alt="billing" />
              <button className="name text-[17px] text-white">
                Add Billing Method
              </button>
            </div> */}

            <div className="radio-container flex gap-20">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="option2"
                  name="option"
                  onChange={handleRadioChange}
                  className="w-5 h-5 cursor-pointer"
                />
                <img
                  src="../images/cashfree.svg"
                  alt="cashree"
                  className="w-10"
                />
                <label
                  htmlFor="option2"
                  className="text-white ml-2 desc text-[18px]"
                >
                  CashFree
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="option1"
                  name="option"
                  onChange={handleRadioChange}
                  className="w-5 h-5 cursor-pointer"
                />
                <img
                  src="../images/creditCard.svg"
                  alt="cashree"
                  className="w-10"
                />
                <label
                  htmlFor="option1"
                  className="text-white ml-2 desc text-[18px]"
                >
                  credit/debit cards
                </label>
              </div>
            </div>

            {/* Show the form based on the selected option */}
            {selectedOption === "option1" && <PaymentCards />}

            {/* Show PayPal button if selected */}
            {selectedOption === "option2" && <CashFreeButton />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodFilling;
