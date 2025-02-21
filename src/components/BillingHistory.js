import React from "react";

const BillingHistory = () => {
  return (
    <div className="w-full h-full pt-6">
      <h1 className="text-[22px] text-white name">Billing History </h1>
      <h2 className="text-[19px] text-[#45be59] name mt-2">
        Stay updated with a full record of your billing history.
      </h2>

      <div className="mt-10 flex flex-col">
        <div className="border border-[#5E8664]  rounded-lg">
          <div className="flex justify-between bg-[#21872F] text-white name tracking-wider p-5 text-center rounded-tl-md rounded-tr-md">
            <div className="w-1/4 font-semibold">DATE</div>
            <div className="w-1/4 font-semibold">INVOICE NO.</div>
            <div className="w-1/4 font-semibold">SERVICE</div>
            <div className="w-1/4 font-semibold">TOTAL $ </div>
            <div className="w-1/4 font-semibold">DOWNLOAD INVOICE</div>
          </div>
          <div className="flex justify-between items-center text-white text-center px-5 py-5 desc text-[16px] pb-5">
            <div className="w-1/4">24/09/2024</div>
            <div className="w-1/4">
              Invoice
              <br />
              FI17663824971
            </div>
            <div className="w-1/4">Voice Over</div>
            <div className="w-1/4">$21.26</div>
            <div className="w-1/4 flex justify-center items-center">
              <button className="flex justify-center items-center gap-4 cursor-pointer px-6 py-3 rounded-lg bg-[#EAB034]">
                <img
                  src="../images/download.svg"
                  alt="download"
                  className="w-5"
                />
                <h1 className="text-[18px] bigText text-black">PDF</h1>
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BillingHistory;
