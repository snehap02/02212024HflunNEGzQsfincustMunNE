import React from "react";

const ProfileView = ({ selectedProfile, setSelectedProfile }) => {
  return (
    <div className="h-[98vh] w-[20rem] bg-[#01231B] py-20 px-8 flex flex-col items-center shadow-lg">
          <button
            className="flex justify-end w-full"
            onClick={() => setSelectedProfile(null)}
          >
            <img src="../images/cancel.svg" alt="close" className="-mt-4" />
          </button>
          <img
            src={`../images/user${selectedProfile.id}.png`}
            alt={selectedProfile.name}
            className="w-28 h-28 rounded-full mt-6"
          />
          <div className="flex flex-col w-full">
            <h1 className="text-white text-xl name tracking-wide mt-6">
              {selectedProfile.name}
            </h1>
            <p className="text-white text-[15px] mt-2 flex gap-4 desc">
              <img src="../images/whiteReview.svg" alt="reviews" />{" "}
              {selectedProfile.rating} | &nbsp; {selectedProfile.reviews}{" "}
              Reviews
            </p>
            <p className="text-[#DAFF99] text-lg mt-2">
              <img src="../images/location.svg" alt="location" />{" "}
              {selectedProfile.location}
            </p>
          </div>
        </div>
  );
};

export default ProfileView;
