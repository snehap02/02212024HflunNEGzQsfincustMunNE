import React from "react";
import { Link } from "react-router-dom";

const CoinsAndMembership = () => {
  return (
    <div className="whole-container px-5 2xl:px-[20rem] 2xl:-ml-56 left-0 h-[96vh] overflow-y-scroll scrollbarNew">
      <div className="title mt-8 md:mt-20 2xl:mt-28 text-white flex flex-col gap-6">
        <h1 className="text-[18px] lg:text-[24px] tracking-wide name">
          Coins & Membership
        </h1>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div>
      <div className="currentPlanDetails mt-6 text-white flex flex-col gap-6">
        <h1 className="text-[17px] text-[#359846] name">
          Manage your Plan and Payments
        </h1>
        <h1 className="text-[15px] md:text-[18px] tracking-wide name">
          Current Plan
        </h1>
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="w-full border border-[#4B5736] rounded-lg px-8 py-5">
            <div className="flex justify-between">
              <h1 className="text-[15px] text-[#61B870] name">Monthly Plan</h1>
              <div className="active flex justify-center items-center gap-2 name">
                <span class="relative flex h-4 w-4">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#359846] opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-4 w-4 bg-[#359846]"></span>
                </span>
                <h1 className="text-[#5AFE76] tracking-wider">Active</h1>
              </div>
            </div>
            <h1 className="mt-4 name text-[36px]">
              $0/<span className="text-[16px]">month</span>
            </h1>
          </div>
          <div className="w-full flex justify-end">
            <button className="bg-button ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-3 px-10 rounded-lg text-[17px] desc tracking-wider">
              <Link to="/pricingPlan">Change Plan</Link>
            </button>
          </div>
          {/* <div className="w-full flex justify-end"><button className="bg-button ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-3 px-10 rounded-lg text-[17px] desc tracking-wider">Change Plan</button></div> */}
        </div>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div>
      <div className="coinBalanceDetails mt-6 text-white flex flex-col gap-6">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <h1 className="text-[15px] md:text-[18px] tracking-wide name">
            Coin Balance
          </h1>
          <button className="bg-button ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-3 px-14 rounded-lg text-[17px] desc tracking-wider">
            Buy Coin
          </button>
          {/* <div className="w-full flex justify-end"><button className="bg-button ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-3 px-10 rounded-lg text-[17px] desc tracking-wider">Change Plan</button></div> */}
        </div>

        <div className="coins mt-5 flex gap-20">
          <div className="border border-[#4B5736] w-full h-40 rounded-lg flex justify-between items-center px-10">
            <div className="flex justify-center items-center gap-5">
              <img src="../images/Gold.svg" alt="gold" className="w-20" />
              <div className="flex flex-col">
                <h1 className="name text-[24px] text-white">Gold</h1>
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
                <h1 className="name text-[24px] text-white">Silver</h1>
                <h2 className="name text-[#B1B1B1] text-[18px]">Coins</h2>
              </div>
            </div>
            <div>
              <h1 className="text-white text-[64px] name">0</h1>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div>
    </div>
  );
};

export default CoinsAndMembership;
