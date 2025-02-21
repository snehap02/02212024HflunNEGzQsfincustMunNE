import React from "react";
import { Link } from "react-router-dom";

const ReferAFriend = () => {
  return (
    <div className="w-full min-h-[100vh] bg-webBg flex flex-col">
      <div className="relative flex flex-col justify-center items-center">
        <h1 className="mt-52 text-[120px] relative name text-center text-mayGreen tracking-wider">
          Coming Soon
        </h1>
        <Link
          to="/"
          className="border border-sageGreen rounded-lg mt-10 bg-pineGreen text-navText name text-[15px] sm:text-[17px] tracking-wider px-10 py-3 hover:cursor-pointer hover:bg-buttonHover hover:text-black hover:border-buySellBorder hover:transition-all hover:scale-105 z-50"
        >
          <button>Back to Home Page</button>
        </Link>
      </div>

      <div className="flex justify-end absolute w-full mt-96">
        <img src="../images/soon.svg" alt="comingsoon" className="w-[38rem] mr-20" />
      </div>
    </div>
  );
};

export default ReferAFriend;
