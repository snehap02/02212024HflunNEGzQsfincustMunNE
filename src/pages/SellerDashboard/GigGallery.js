import React from "react";
import { data } from "./MockCardData";
import { Link } from "react-router-dom";

const GigGallery = () => {
  return (
    <div className="w-full mt-2">
      {/* Outer wrapper for the cards */}
      <div className="bg-darkGreen w-full rounded-lg overflow-x-auto 2xl:flex 2xl:justify-center 2xl:items-center 2xl:flex-row scrollbarNew">
        <div className="flex flex-nowrap gap-4 py-4 px-16 2xl:px-20 -ml-10 lg:gap-14 justify-around">
          {/* Loop through your data to create the cards */}
          {data.map((card, index) => (
            <div
              key={index}
              className="flex-none w-72 sm:w-80 md:w-96 lg:w-80 xl:w-[26rem] 2xl:w-[30%]"
            >
            <Link to="/Gig">
            <div className="bg-[#004321] p-4 rounded-lg shadow-lg relative flex items-center justify-center">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 object-cover rounded-md relative"
                />
                <Link to="/editGig" className="absolute -translate-y-[150%] translate-x-[200%] hover:transition-all hover:scale-105">
                <img src={card.editIcon} alt="icon"/>
                </Link>
                
                <div className="w-full bg-[#004321] absolute h-20 bg-opacity-60 flex justify-center items-center bottom-0 m-4">
                  <h3 className="text-xl text-white name font-bold absolute text-center w-full 2xl:desc tracking-wide">
                    {card.title}
                  </h3>
                </div>
              </div>
            </Link>
              
            </div>
          ))}
        </div>

        <div className="add-section lg:h-[368px] h-10 lg:w-10 w-full 2xl:flex justify-center items-center hidden">
          <button className="rotate-90 lg:rotate-0">
            <Link to="/editGig">
              <img src="../images/add.svg" alt="Add" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GigGallery;
