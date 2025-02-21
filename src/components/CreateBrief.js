import React from "react";

const CreateBrief = () => {
  return (
    <div className="px-72 flex flex-col gap-16 pb-28">
      <div className="border w-full min-h-[40rem] rounded-lg border-[#2B4B3B] flex justify-center items-center">
        <div className="brief-content flex flex-col gap-5">
          <h1 className="text-white name text-[28px] tracking-wide text-center">
            Post your first project brief
          </h1>
          <p className="text-center desc text-neutral-300 tracking-wide text-[17px]">
            Define your project goals and generate a custom brief with AI.{" "}
            <br />
            Get matched with top offers instantly.
          </p>
          <div className="w-full h-14 flex justify-center items-center mt-6">
            <button className="text-white bg-[#21872F] py-4 px-10 name rounded-lg tracking-wider text-[18px] hover:transition-all hover:scale-105">
              Create your brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBrief;

//uploads your first project brief
