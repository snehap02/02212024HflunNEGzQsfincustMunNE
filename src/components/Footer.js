import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full min-h-full bg-webBg flex justify-center items-center flex-col">
      <div className="h-[1px] w-full bg-green-800"></div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-20 text-lg py-10 w-full px-10 lg:px-20 xl:px-64">
        <div className="column1 flex flex-col desc gap-5 text-[#e9fdfc]">
        <h1 className="text-2xl mb-3 text-white bigText">FinCust</h1>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/termsandconditions">Terms And Conditions</Link>
        </div>
        <div className="column2 flex flex-col desc gap-5 text-[#e9fdfc]">
        <h1 className="text-2xl mb-3 text-white bigText">For Freelancers</h1>
          <Link to="/maintenance">Become a Freelancer</Link>
          <Link to="/maintenance">Find Jobs</Link>
          <Link to="/maintenance">Create a brief</Link>
          <Link to="/maintenance">Pricing Page</Link>
          <Link to="/maintenance">Help and Support</Link>
        </div>
        <div className="column3 flex flex-col desc gap-5 text-[#e9fdfc]">
        <h1 className="text-2xl mb-3 text-white bigText">Categories</h1>
          <Link to="/maintenance">Animation</Link>
          <Link to="/maintenance">Website Design</Link>
          <Link to="/maintenance">Video Editing</Link>
          <Link to="/maintenance">Logo Design</Link>
          <Link to="/maintenance">Web Design</Link>
          <Link to="/maintenance">Content Writing</Link>
          <Link to="/maintenance">3D Modeling</Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 mb-10">
        <img src={`${process.env.PUBLIC_URL}/images/Logo.svg`} alt="logo"/>
        <h1 className="text-white desc text-md">© 2024, FinCust For Freelancers</h1>
      </div>
    </div>
  );
};

export default Footer;
