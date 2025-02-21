import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Gig = () => {
  return (
    <div className="bg-webBg min-h-[115vh] w-full flex flex-col md:flex-row overflow-x-hidden gap-16">
      <Sidebar/>
      <Content/>
    </div>
  );
};

export default Gig;
