import React from "react";
import CashfreeBilling from "../pages/SettingsPage/CashfreeBilling";

const BillingMethod = () => {
  return (
    <div className="w-full h-full pt-6 grid grid-cols-3 gap-20">
      <div className="first-div w-full col-span-2">
        <h1 className="text-[22px] text-white name">
          Choose Your Billing Method
        </h1>
        <h2 className="text-[19px] text-[#45be59] name mt-2">
          Select the payment options that work best for you.
        </h2>
        <h2 className="text-[17px] text-[#3caa4e] opacity-95 desc mt-2">
          Add, Update or Remove your payment methods.
        </h2>
        <div className="mt-4 w-full h-16 bg-[#004321] bg-opacity-25 rounded-lg flex justify-between gap-7 px-6 items-center">
          <img src="../images/info.svg" alt="info" className="" />
          <h1 className="desc tracking-wide text-[18px] text-[#DAFF99]">
            {" "}
            The name on your bank must match exactly with the name on your
            Fincust account to avoid payment failures.
          </h1>
        </div>
        <div className="w-full flex justify-between items-center mt-6 border border-[#4B5736] rounded-lg px-20">
          <div className="billingBox flex gap-6 justify-center items-center py-8 cursor-pointer">
            <img src="../images/cashfree.svg" alt="cashfree" className="w-16" />
            <h1 className="text-[22px] text-white name tracking-wide">
              Cashfree
            </h1>
          </div>
          <div>
            <CashfreeBilling />
          </div>
        </div>
      </div>

      <div className="second-div w-full">
        <h1 className="text-[22px] text-white name">Coin Balance</h1>
        <h2 className="text-[19px] text-[#45be59] name mt-2">
          Your available coins for purchases
        </h2>
        <div className="mt-12 flex flex-col gap-8">
          <div className="border border-[#4B5736] w-full h-40 rounded-lg flex justify-between items-center px-10">
            <div className="flex justify-center items-center gap-5">
              <img src="../images/Gold.svg" alt="gold" className="w-20" />
              <div className="flex flex-col">
                <h1 className="name text-[28px] text-white">Gold</h1>
                <h2 className="name text-[#B1B1B1] text-[18px]">Coins</h2>
              </div>
            </div>
            <div>
              <h1 className="text-white text-[64px] name">0</h1>
            </div>
          </div>
          <div className="border border-[#4B5736] w-full h-40 rounded-lg flex justify-between items-center px-10">
            <div className="flex justify-center items-center gap-5">
              <img src="../images/Silver.svg" alt="gold" className="w-20" />
              <div className="flex flex-col">
                <h1 className="name text-[28px] text-white">Silver</h1>
                <h2 className="name text-[#B1B1B1] text-[18px]">Coins</h2>
              </div>
            </div>
            <div>
              <h1 className="text-white text-[64px] name">0</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingMethod;
