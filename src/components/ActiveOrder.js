import React from "react";
import OrderHeading from "./OrderHeading";
import { Link } from "react-router-dom";

const ActiveOrder = () => {
  return (
    <div className="w-full h-full gap-20 bg-[#002518] rounded-lg">
      <OrderHeading />
      <div className="mt-8 grid grid-cols-5 pb-8 px-20 text-center">
        <div className="buyersName flex items-center justify-center gap-5">
          <img src="../images/DP.svg" alt="img" className="w-10" />
          <h2 className="name text-white">Debarun Purkayastha</h2>
        </div>
        <div className="gigtitle flex items-center justify-center text-left ml-9">
          <Link to="/individualorder" className="name text-white w-64">
            I will create an infographic animated explainer video for your
            business
          </Link>
        </div>
        <div className="dueon flex items-center justify-center">
          <h1 className="name text-[#FF8A8A]">Sept 21 (2 Days)</h1>
        </div>
        <div className="budget flex items-center justify-center">
          <h1 className="name text-white">$100</h1>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="flex gap-3 justify-center items-center bg-[#6060B2] px-4 rounded-lg py-3">
            <div className="bg-[#0E0E99] w-4 h-4 rounded-full"></div>
            <div className="text-white text-[17px] name">In Progress</div>
          </div>
          <div className="flex justify-end">
            <button className="px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px] name flex justify-between items-center gap-3 text-white">
              <Link to="/individualorder">Deliver</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveOrder;
