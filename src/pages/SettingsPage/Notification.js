import React, { useState } from "react";
import { notificationList } from "../SellerDashboard/MockCardData";

const Notification = () => {
  // State for all notifications
  const [notifications, setNotifications] = useState({
    inbox: { email: false, sms: false },
    order: { email: false, sms: false },
    job: { email: false, sms: false },
    deadline: { email: false, sms: false },
    feedback: { email: false, sms: false },
  });

  // Function to toggle state
  const toggleNotification = (type, channel) => {
    setNotifications({
      ...notifications,
      [type]: {
        ...notifications[type],
        [channel]: !notifications[type][channel],
      },
    });
  };

  return (
    <div className="whole-container px-5 2xl:px-[20rem] 2xl:-ml-56 left-0 h-[96vh] overflow-y-scroll scrollbarNew">
      <div className="title mt-8 md:mt-20 2xl:mt-28 text-white flex flex-col gap-6">
        <h1 className="text-[18px] lg:text-[24px] tracking-wide name">
          Notifications
        </h1>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>

        <div className="flex flex-col">
          {notificationList.map((item) => (
            <div key={item.type} className="flex flex-col justify-between ">
              <div className="flex justify-between mt-6 pb-6">
                <div>
                  <h3 className="mb-2 text-[16px] name">{item.name}</h3>
                  <h3 className="mb-2 text-[15px] desc text-[#3fc455] w-96 tracking-wide">
                    {item.details}
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Email Toggle */}
                  <div className="flex items-center gap-2">
                    <label className="text-[17px] name text-[#61B870]">
                      Email
                    </label>
                    <button
                      onClick={() => toggleNotification(item.type, "email")}
                      className={`w-16 h-7 rounded-full ${
                        notifications[item.type].email
                          ? "bg-[#359846]"
                          : "bg-gray-600"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                          notifications[item.type].email
                            ? "translate-x-10"
                            : "translate-x-1"
                        }`}
                      ></div>
                    </button>
                  </div>

                  {/* SMS Toggle */}
                  <div className="flex items-center gap-4">
                    <label className="text-[17px] name text-[#61B870]">
                      SMS
                    </label>
                    <button
                      onClick={() => toggleNotification(item.type, "sms")}
                      className={`w-16 h-7 rounded-full ${
                        notifications[item.type].sms
                          ? "bg-[#359846]"
                          : "bg-gray-600"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                          notifications[item.type].sms
                            ? "translate-x-10"
                            : "translate-x-1"
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
