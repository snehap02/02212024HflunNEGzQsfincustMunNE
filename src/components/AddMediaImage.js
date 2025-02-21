import React, { useState } from "react";

const Media = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Allowed image types
  const allowedFormats = ["image/jpeg", "image/png", "image/gif", "image/webp"];

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const files = event.target.files;
    const validImages = [];
    let invalidFormat = false;

    Array.from(files).forEach((file) => {
      if (allowedFormats.includes(file.type)) {
        validImages.push(URL.createObjectURL(file));
      } else {
        invalidFormat = true;
      }
    });

    if (invalidFormat) {
      setErrorMessage("Only images (JPEG, PNG, GIF, WEBP) are allowed.");
    } else {
      setErrorMessage(""); // Clear any previous error messages
    }

    setUploadedImages((prev) => [...prev, ...validImages]);
  };

  // Function to remove a specific uploaded image
  const removeImage = (imageToRemove) => {
    setUploadedImages((prev) =>
      prev.filter((image) => image !== imageToRemove)
    );
  };

  // Function to close the enlarged image modal
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col">
      <div className="images">
        <h2 className="text-[16px] bigText -mt-6">Upload Project Images</h2>
        <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify">
          At least 1 image, up to 10
        </h2>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
        )}

        <div className="image-cards mt-4 flex md:flex-row flex-wrap justify-center items-center md:justify-start flex-col gap-4 lg:gap-8">
          {/* Uploaded Images */}
          {uploadedImages.map((image, index) => (
            <div
              key={index}
              className="relative w-[285px] h-[200px] flex justify-center items-center rounded-lg overflow-hidden border border-gray-300 shadow-sm bg-white"
            >
              <img
                src={image}
                alt={`Uploaded Preview ${index}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
              {/* Cancel Button */}
              <button
                className="absolute top-2 right-2  text-sm px-2 py-1"
                onClick={() => removeImage(image)}
              >
                <img src="../images/bin.svg" alt="bin" className="text-red-700 w-5 transition-all hover:scale-110"/>
              </button>
            </div>
          ))}

          {/* Upload Placeholder */}
          {uploadedImages.length < 10 && (
            <label className="cursor-pointer w-[285px] h-[200px] flex flex-col gap-4 justify-center items-center rounded-lg bg-[#012619] border border-dashed border-gray-400">
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageUpload}
              />
              <img
                src="../images/BrokenImg.svg"
                alt="Upload Placeholder"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col justify-center items-center text-white text-sm">
                <h2 className="name text-[15px]">Drag and drop a photo</h2>
                <h2 className="name text-[15px]">Or</h2>
                <h2 className="text-blue-400 name">Browse</h2>
              </div>
            </label>
          )}
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeImage}
        >
          <div className="relative">
            {/* Enlarged Image */}
            <img
              src={selectedImage}
              alt="Enlarged Project Example"
              className="450:w-[65vw] w-[90vw] 450:h-[65vh] h-[50vh] rounded-lg object-contain"
            />
            {/* Close Button */}
            <button
              onClick={closeImage}
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

export default Media;
