import React, { useState } from "react";

const AddMediaVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Allowed video formats
  const allowedFormats = ["video/mp4", "video/webm", "video/ogg"];

  // Function to handle video upload
  const handleVideoUpload = (event) => {
    const files = event.target.files;
    const validVideos = [];
    let invalidFormat = false;

    Array.from(files).forEach((file) => {
      if (allowedFormats.includes(file.type)) {
        validVideos.push(URL.createObjectURL(file));
      } else {
        invalidFormat = true;
      }
    });

    if (invalidFormat) {
      setErrorMessage("Only videos (MP4, WebM, OGG) are allowed.");
    } else {
      setErrorMessage(""); // Clear any previous error messages
    }

    setUploadedVideos((prev) => [...prev, ...validVideos]);
  };

  // Function to remove a specific uploaded video
  const removeVideo = (videoToRemove) => {
    setUploadedVideos((prev) =>
      prev.filter((video) => video !== videoToRemove)
    );
  };

  // Function to close the enlarged video modal
  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="flex flex-col mt-16">
      <div className="videos">
        <h2 className="text-[16px] bigText -mt-6">Upload Project Videos</h2>
        <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify">
          Only 1 Video
        </h2>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
        )}

        <div className="video-cards mt-4 flex md:flex-row flex-wrap justify-center items-center md:justify-start flex-col gap-4 lg:gap-8">
          {/* Uploaded Videos */}
          {uploadedVideos.map((video, index) => (
            <div
              key={index}
              className="relative w-[285px] h-[200px] flex justify-center items-center rounded-lg overflow-hidden border border-gray-300 shadow-sm bg-white"
            >
              <video
                src={video}
                controls
                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              />
              {/* Cancel Button */}
              <button
                className="absolute top-2 right-2 text-sm px-2 py-1"
                onClick={() => removeVideo(video)}
              >
                <img src="../images/bin.svg" alt="bin" className="text-red-700 w-5 transition-all hover:scale-110"/>
              </button>
            </div>
          ))}

          {/* Upload Placeholder */}
          {uploadedVideos.length < 1 && (
            <label className="cursor-pointer w-[285px] h-[200px] flex flex-col gap-4 justify-center items-center rounded-lg bg-[#012619] border border-dashed border-gray-400">
              <input
                type="file"
                accept="video/*"
                multiple
                className="hidden"
                onChange={handleVideoUpload}
              />
              <img
                src="../images/BrokenVideo.svg"
                alt="Upload Placeholder"
                className="w-12 h-12 ml-2 object-contain"
              />
              <div className="flex flex-col justify-center items-center text-white text-sm">
                <h2 className="name text-[15px]">Drag and drop a video</h2>
                <h2 className="name text-[15px]">Or</h2>
                <h2 className="text-blue-400 name">Browse</h2>
              </div>
            </label>
          )}
        </div>
      </div>

      {/* Enlarged Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeVideo}
        >
          <div className="relative">
            {/* Enlarged Video */}
            <video
              src={selectedVideo}
              controls
              className="450:w-[65vw] w-[90vw] 450:h-[65vh] h-[50vh] rounded-lg object-contain"
            />
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg hover:bg-gray-200 transition-all text-xl"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMediaVideo;
