import React from "react";
import MessageSidebar from "../../components/MessageSidebar";

const Messages = () => {
  return (
    <div className="w-full h-[100vh] bg-webBg px-20">
      <div className="w-full bg-[#01231B] pt-6">
        <MessageSidebar />
      </div>
    </div>
  );
};

export default Messages;
