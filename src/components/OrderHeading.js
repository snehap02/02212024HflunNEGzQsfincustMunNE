import React from "react";
import { orders } from "../pages/SellerDashboard/MockCardData";

const OrderHeading = () => {
  return (
    <div>
      <div className="bg-[#002518] rounded-lg w-full">
        <div className="grid grid-cols-5 px-20 py-4 text-center">
          {orders.map((order) => (
            <h1
              key={order}
              className="uppercase text-[#DAFF99] text-[17px] name tracking-wider"
            >
              {order}
            </h1>
          ))}
        </div>
        <div className="w-full h-[1px] bg-[#6B8F71]"></div>
      </div>
    </div>
  );
};

export default OrderHeading;
