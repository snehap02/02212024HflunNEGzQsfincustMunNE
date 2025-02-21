import React from "react";

const EnterprisePlan = () => {
  return (
    <div className="mt-10 flex justify-center items-center">
      <div className="h-[490px] w-[460px] rounded-lg hover:scale-105 bg-gradient-to-b from-[#00A953] to-[#012619] transition-all cursor-pointer bg-white flex flex-col px-10 py-4">
        <div className="planName">
          <h1 className="text-[#9ffdd1] name text-[20px]">Enterprise</h1>
        </div>
        <div className="lists mt-5 flex flex-col gap-3">
          <div className="list1 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[16px] text-white name tracking-wider">
              Free transaction for freelancers
            </h1>
          </div>
          <div className="list2 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[16px] text-white name tracking-wider">
              Ability to send 100 proposals to buyer per month (5 each day)
            </h1>
          </div>
          <div className="list3 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[16px] text-white name tracking-wider">
              Transaction fees: 0.75% to buyer per transaction
            </h1>
          </div>
          <div className="list4 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[16px] text-white name tracking-wider">
              Unlimited access to all plans’ features
            </h1>
          </div>
          <div className="list5 flex gap-5">
            <img src="../images/Available.svg" alt="available" />
            <h1 className="text-[16px] text-white name tracking-wider">
              Get 200 silver coins /month and 100 gold coins /month
            </h1>
          </div>
        </div>
        <div className="mt-4 text-white name text-[18px] tracking-wider">
            <h1>+ many more.....</h1>
        </div>
        <div className="button w-full flex justify-center items-center h-full mt-5">
          <button className="bg-[#007711] ring-2 ring-green-800 hover:bg-[#0e5e1a] text-white font-bold py-3 px-10 rounded-lg text-[17px] desc tracking-wider">
          Contact Our Sales Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePlan;
