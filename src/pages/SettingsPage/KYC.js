import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { idCards } from "../SellerDashboard/MockCardData";

const KYC = () => {
  const [selectedCategoryOption, setSelectedCategoryOption] = useState(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const handleSelectCategory = (option) => {
    setSelectedCategoryOption(option);
    setIsCategoryOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [uploadedPhoto, setUploadedPhoto] = useState(null); // Final captured photo
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  // Open the modal
  const openModal = () => setIsModalOpen(true);

  // Close the modal
  const closeModal = () => {
    stopCamera();
    setIsModalOpen(false);
  };

  // Start live camera
  const startCamera = async () => {
    setIsCameraOn(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
  };

  // Stop the camera
  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setIsCameraOn(false);
  };

  // Capture photo and close modal
  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL("image/png"); // Convert to image format
    setUploadedPhoto(image); // Set captured photo for display
    stopCamera(); // Stop camera after capture
    closeModal(); // Close modal
  };

  return (
    <div className="whole-container px-5 2xl:px-[20rem] 2xl:-ml-56 left-0 h-[96vh] overflow-y-scroll scrollbarNew">
      <div className="title mt-8 md:mt-20 2xl:mt-28 text-white flex flex-col gap-6">
        <h1 className="text-[18px] lg:text-[24px] tracking-wide name">KYC</h1>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div>

      <div className="validIDDetails mt-6 text-white flex flex-col gap-6 pb-4">
        <div className="flex gap-2">
          <h1 className="text-[19px] text-[#45be59] desc">
            Verify Your Identity
          </h1>
          <img src="../images/verify.svg" alt="verify" />
        </div>

        <div className="flex justify-between items-center">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-[15px] md:text-[16px] tracking-wide name">
              Upload valid Government ID
            </h1>
            <h2 className="desc text-[#3fc455] w-96">
              Please upload your Aadhar card below for completing your first
              step of KYC.
            </h2>
          </div>
          <div className="idDropdown w-full flex justify-end">
            <div className="category relative w-[14rem] name lg:text-lg">
              <button
                className="w-full bg-[#012619] text-white py-2 px-4 rounded-lg shadow-lg shadow-[#071B16] flex justify-between items-center xl:px-5 xl:py-3"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                {selectedCategoryOption || "Select a category"}
                <svg
                  className={`w-6 h-6 transition-transform text-buttonHover ${
                    isCategoryOpen ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isCategoryOpen && (
                <ul className="absolute w-full bg-[#012619] mt-2 rounded-lg shadow-lg px-2 py-1 z-50 xl:py-3 overflow-y-scroll scrollbar">
                  {idCards.map((option, index) => (
                    <li
                      key={index}
                      className="py-2 px-4 w-full hover:bg-forestGreen cursor-pointer rounded-lg"
                      onClick={() => handleSelectCategory(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40 mt-4"></div>
      </div>

      <div className="photoUploadDetails mt-6 text-white flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-[15px] md:text-[16px] tracking-wide name">
              Upload Photo
            </h1>
            <h2 className="desc text-[#3fc455]">Please upload your photo</h2>
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={openModal}
              className="bg-button ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-3 px-20 rounded-lg text-[17px] desc tracking-wider"
            >
              Upload
            </button>
          </div>
        </div>

        {/* Display Uploaded Photo */}
        {uploadedPhoto && (
          <div className="mt-4 flex items-center gap-2">
            <h3 className="text-[16px] name">Uploaded Photo:</h3>
            <img
              src={uploadedPhoto}
              alt="Uploaded"
              className="w-32 h-20 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-[#004321] p-6 border border-[#DAFF99] border-dashed rounded-lg text-white w-96 flex flex-col justify-center items-center gap-4">
              <div className="flex justify-end w-full">
                <button onClick={closeModal}>
                  <img src="../images/cancel.svg" alt="cancel" />
                </button>
              </div>

              <img src="../images/userCam.svg" alt="img" />
              <h2 className="text-xl name mb-2">A Photo of You</h2>
              <h2 className="text-center text-[16px] desc text-[#5cff77]">
                Please make sure your face is clearly visible in the photo.
              </h2>
              {isCameraOn ? (
                <>
                  <video ref={videoRef} className="w-full rounded-lg" />
                  <button
                    onClick={capturePhoto}
                    className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg name"
                  >
                    Capture Photo
                  </button>
                </>
              ) : (
                <button
                  onClick={startCamera}
                  className="mt-3 px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px] name flex justify-between items-center gap-3"
                >
                  <img src="../images/camera.svg" alt="camera" />
                  Start Camera
                </button>
              )}
            </div>
          </div>
        )}

        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40 mt-4"></div>
      </div>

      <div className="reviewContent flex justify-between items-center mt-8">
        <div className="w-full border border-[#5E8664] rounded-lg h-20 flex justify-start px-10 items-center gap-6">
          <img src="../images/greencheck.svg" alt="badge" />
          <h1 className="text-[18px] text-white desc">
            Your data is encrypted & not stored with us
          </h1>
        </div>
        <div className="w-full flex justify-end">
          <button className="mt-3 px-10 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px] name flex justify-between items-center gap-3 text-white">
            Submit for Review
          </button>
        </div>
      </div>

      <div className="mt-12 privacyPolicy">
        <h1 className="text-[17px] desc text-white underline underline-offset-8 cursor-pointer">
          Read{" "}
          <Link to="/privacypolicy" className="name hover:text-limeGreen">
            Privacy Policy
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default KYC;
