import React from "react";
import ComposeMail from "../../components/ComposeMail";

const HelpCenter = () => {
  return (
    <div className="w-full min-h-[100vh] bg-webBg pb-20">
      <div className="xl:px-48">
        <h1 className="name text-[32px] pt-28 text-white">
          Create a support ticket
        </h1>
        <h2 className="name text-[20px] text-[#45be59] mt-4 text-justify w-[60%] leading-8">
          Welcome to the Help Center! Whether you’re a freelancer or a client,
          find answers to your questions, get support, and explore resources to
          make the most of your freelancing journey.
        </h2>
        <div className="w-full h-[1px] bg-[#6B8F71] bg-opacity-40 mt-6"></div>
        <ComposeMail />
      </div>
    </div>
  );
};

export default HelpCenter;
