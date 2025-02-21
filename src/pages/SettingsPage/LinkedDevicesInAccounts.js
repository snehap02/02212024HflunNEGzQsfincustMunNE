import React, { useEffect, useState } from "react";
import axios from "axios";

const LinkedDevicesInAccounts = ({ userId }) => {
  const [linkedDevices, setLinkedDevices] = useState([]);

  useEffect(() => {
    const fetchDeviceData = async () => {
        try{
            const response = await axios.get(`http://localhost:5000/api/auth/linked-devices/${userId}`);
            setLinkedDevices(response.data);
        }catch(error){
            console.error("Error fetching the data is:", error);
        }
    }
    fetchDeviceData();
  },[userId]);


  const unlinkDevice = async (deviceId) => {
    try {
      await axios.post("http://localhost:5000/api/auth/unlink-device", { userId, deviceId });
      setLinkedDevices(linkedDevices.filter((device) => device.id !== deviceId));
    } catch (error) {
      console.error("Error unlinking device:", error);
    }
  };


  return (
    <div className="linkedDevices mt-8 text-white flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex flex-col gap-6">
                <h1 className="text-[15px] md:text-[16px] tracking-wide name">
                  Linked Devices
                </h1>
                <p className="text-[15px] text-[#6B8F71] -mt-4 name">
                  Device Status ( Tap a device to log out )
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 xl:gap-10 2xl:gap-20">
              {/* <div className="device-boxes w-full flex flex-col gap-5">
                {linkedDevices.map((device) => (
                  <div
                    key={device.id}
                    className="flex justify-between items-center py-4 px-10 border border-[#4B5736] w-full h-28 rounded-lg"
                  >
                    <div className="flex justify-center items-center gap-6">
                      <img
                        src={device.img}
                        alt={device.name}
                        className="w-12 h-12"
                      />
                      <div className="flex flex-col gap-2">
                        <h1 className="desc text-[16px]">{device.deviceName} , {device.browser}</h1>
                        <p className="desc text-[16px] text-[#A9B5AB]">
                          {device.loginTime}
                        </p>
                      </div>
                    </div>
    
                    <div className="name text-[#61B870]">
                      <button>Sign Out</button>
                    </div>
                  </div>
                ))}
              </div> */}

                <ul>
                {linkedDevices.map((device, index) => (
                <li key={index}>
                    {device.deviceName} ({device.browser}) - {new Date(device.loginTime).toLocaleString()}
                    <button onClick={() => unlinkDevice(device.id)}>Unlink</button>
                </li>
                ))}
                </ul>
            </div>
            <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
          </div>
  )
}

export default LinkedDevicesInAccounts