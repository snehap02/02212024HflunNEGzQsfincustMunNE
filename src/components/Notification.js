import React from "react";

const Notification = ({ notifications = [] }) => {
  return (
    <div className="absolute right-1 mt-[1.2rem] w-[439px] min-h-[200px] bg-webBg name border border-[#DAFF99] shadow-lg rounded-lg p-2 flex flex-col z-50 px-6">
      <div className="titleAndLine">
        <h1 className="text-[18px]">Notification ({notifications.length})</h1>
        <div className="w-full h-[1px] bg-[#6B8F71] bg-opacity-40 mt-3"></div>
      </div>

      <div className="notificationContent overflow-y-scroll scrollbarNew max-h-96 w-[105%] overflow-x-hidden">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div
              key={index}
              className="p-3 border border-[#6B8F71] rounded-md shadow-sm flex gap-5 border-opacity-20 mt-4 w-full"
            >
              <img
                src="../images/AskAI.png"
                alt="icon"
                className="w-[59px] h-[59px] mt-3"
              />
              <div className="w-full h-auto flex flex-col">
                <h1 className="text-sm desc w-[17rem]">{notification.text}</h1>
                <span className="text-[#6B8F71]">{notification.time}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-[#83b18a] text-opacity-70 w-full flex flex-col justify-center items-center mt-6 max-h-52">
            <img
              src={`${process.env.PUBLIC_URL}/images/notification.svg`}
              alt="notification"
              className="w-12"
            />
            <p className="name text-[17px] tracking-wider">
              No New Notifications
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
