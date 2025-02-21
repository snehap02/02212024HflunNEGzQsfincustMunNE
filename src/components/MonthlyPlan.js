import React from "react";
import CashFreeBtn from "../pages/PricingPlan/CashFreeSubscription";

const MonthlyPlan = () => {
  return (
    <div className="mt-10 flex justify-between items-center">
      <div className="h-[540px] w-[460px] rounded-lg hover:scale-105 bg-gradient-to-b from-[#00A953] to-[#012619] transition-all cursor-pointer bg-white flex flex-col ">
        <div className="px-10 py-4">
          <div className="planName">
            <h1 className="text-[#9ffdd1] name text-[20px]">Basic</h1>
          </div>
          <div className="price">
            <h1 className="text-[50px] text-white bigText tracking-wide">
              Free
            </h1>
          </div>
          <div className="lists mt-2 flex flex-col gap-3">
            <div className="list1 flex gap-5">
              <img src="../images/Available.svg" alt="available" />
              <h1 className="text-[17px] text-white name tracking-wider">
                Send 5 proposals per month
              </h1>
            </div>
            <div className="list2 flex gap-5">
              <img src="../images/Available.svg" alt="available" />
              <h1 className="text-[17px] text-white name tracking-wider">
                Unlimited gig listings
              </h1>
            </div>
            <div className="list3 flex gap-5">
              <img src="../images/Available.svg" alt="available" />
              <h1 className="text-[17px] text-white name tracking-wider">
                Standard email support (not 24/7)
              </h1>
            </div>
            <div className="list4 flex gap-5">
              <img src="../images/Available.svg" alt="available" />
              <h1 className="text-[17px] text-white name tracking-wider">
                Weekly games with chances to win coins and real money
              </h1>
            </div>
            <div className="list5 flex gap-5">
              <img src="../images/NotAvailable.svg" alt="not-available" />
              <h1 className="text-[17px] text-white name tracking-wider opacity-25">
                Enhanced gig visibility starting from the Professional plan.
              </h1>
            </div>
          </div>
        </div>

        <div className="button w-full flex justify-center items-center h-full mt-24 bg-[#01291A]">
          <h1 className="text-[26px] desc text-white">Current Plan</h1>
        </div>
      </div>

      <div className="h-[540px] w-[460px] rounded-lg hover:scale-105 bg-gradient-to-b from-[#00A953] to-[#012619] transition-all cursor-pointer bg-white flex flex-col px-10 py-4">
        <div className="planName">
          <h1 className="text-[#9ffdd1] name text-[20px]">Professional</h1>
        </div>
        <div className="price">
          <h1 className="text-[50px] text-white bigText tracking-wide">
            ₹800/<span className="text-[17px]">month</span>
          </h1>
        </div>
        <div className="lists mt-2 flex flex-col gap-3">
          <div className="list1 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[16px] text-white name tracking-wider">
              Send 15 proposals per month (3/day)
            </h1>
          </div>
          <div className="list2 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[16px] text-white name tracking-wider">
              Priority gig placement, advanced analytics, 50 silver coins/month
            </h1>
          </div>
          <div className="list3 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[16px] text-white name tracking-wider">
              Faster email support (not 24/7)
            </h1>
          </div>
          <div className="list4 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[16px] text-white name tracking-wider">
              Weekly games with chances to win coins and real money
            </h1>
          </div>
          <div className="list5 flex gap-5">
            <img src="../images/NotAvailable.svg" alt="not-available" />
            <h1 className="text-[16px] text-white name tracking-wider opacity-25">
              Premium offers top-ranking visibility, while Professional provides
              priority placement.
            </h1>
          </div>
        </div>
        <div className="button w-full flex justify-center items-center h-full mt-5">
          <button className="bg-[#007711] ring-2 ring-green-800 hover:bg-[#0e5e1a] text-white font-bold py-3 px-10 rounded-lg text-[17px] desc tracking-wider">
            <CashFreeBtn />
          </button>
        </div>
      </div>

      <div className="h-[540px] w-[460px] rounded-lg hover:scale-105 bg-gradient-to-b from-[#00A953] to-[#012619] transition-all cursor-pointer bg-white flex flex-col px-10 py-4">
        <div className="planName">
          <h1 className="text-[#9ffdd1] name text-[20px]">Premium</h1>
        </div>
        <div className="price">
          <h1 className="text-[50px] text-white bigText tracking-wide">
            ₹1500/<span className="text-[17px]">month</span>
          </h1>
        </div>
        <div className="lists mt-3 flex flex-col gap-3">
          <div className="list1 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[17px] text-white name tracking-wider">
              Send 30 proposals per month (5/day)
            </h1>
          </div>
          <div className="list2 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[17px] text-white name tracking-wider">
              Dedicated account manager (AI or real) and 24/7 priority support
            </h1>
          </div>
          <div className="list3 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[17px] text-white name tracking-wider">
              1.5% buyer transaction fees, Rs 99 seller withdrawal fee
            </h1>
          </div>
          <div className="list4 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[17px] text-white name tracking-wider">
              Weekly games with chances to win coins and real money
            </h1>
          </div>
          <div className="list5 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[17px] text-white name tracking-wider">
              Enhanced gig visibility starting from the Professional plan.
            </h1>
          </div>
        </div>
        <div className="button w-full flex justify-center items-center h-full">
          <button className="bg-[#007711] ring-2 ring-green-800 hover:bg-[#0e5e1a] text-white font-bold py-3 px-10 rounded-lg text-[17px] desc tracking-wider">
            <CashFreeBtn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonthlyPlan;
