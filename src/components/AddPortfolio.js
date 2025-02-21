import React, { useState } from "react";

const AddPortfolio = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Allowed file formats
  const allowedFormats = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "video/mp4",
    "video/webm",
    "video/ogg",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const files = event.target.files;
    const validFiles = [];
    let invalidFormat = false;

    Array.from(files).forEach((file) => {
      if (allowedFormats.includes(file.type)) {
        validFiles.push({
          file,
          url: URL.createObjectURL(file),
        });
      } else {
        invalidFormat = true;
      }
    });

    if (invalidFormat) {
      setErrorMessage("Some files were not uploaded due to unsupported formats.");
    } else {
      setErrorMessage(""); // Clear any previous error messages
    }

    setUploadedFiles((prev) => [...prev, ...validFiles]);
  };

  // Function to remove a specific uploaded file
  const removeFile = (fileToRemove) => {
    setUploadedFiles((prev) => prev.filter((file) => file.url !== fileToRemove));
  };

  // Function to close the preview modal
  const closePreview = () => {
    setSelectedFile(null);
  };

  return (
    <div className="flex flex-col mt-16">
      <div className="portfolio">
        <h2 className="text-[16px] bigText -mt-6">Add from Portfolio</h2>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
        )}

        <div className="file-cards mt-4 flex md:flex-row flex-wrap justify-center items-center md:justify-start flex-col gap-4 lg:gap-8">
          {/* Uploaded Files */}
          {uploadedFiles.map((fileData, index) => {
            const { file, url } = fileData;

            // Determine how to display the file based on its type
            const isImage = file.type.startsWith("image/");
            const isVideo = file.type.startsWith("video/");
            const isDocument = file.type.includes("pdf") || file.type.includes("word");

            return (
              <div
                key={index}
                className="relative w-[285px] h-[200px] flex justify-center items-center rounded-lg overflow-hidden border border-gray-300 shadow-sm bg-white"
              >
                {isImage && (
                  <img
                    src={url}
                    alt={`Uploaded File ${index}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => setSelectedFile({ type: "image", url })}
                  />
                )}

                {isVideo && (
                  <video
                    src={url}
                    controls
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => setSelectedFile({ type: "video", url })}
                  />
                )}

                {isDocument && (
                  <div className="flex flex-col justify-center items-center w-full h-full bg-gray-100 cursor-pointer hover:bg-gray-200 transition-all">
                    <span className="text-gray-600 text-sm">
                      {file.name.split(".").pop().toUpperCase()} File
                    </span>
                    <button
                      onClick={() => window.open(url, "_blank")}
                      className="mt-2 text-blue-600 underline text-sm"
                    >
                      Open
                    </button>
                  </div>
                )}

                {/* Cancel Button */}
                <button
                  className="absolute top-2 right-2 text-sm px-2 py-1"
                  onClick={() => removeFile(url)}
                >
                  <img src="../images/bin.svg" alt="bin" className="text-red-700 w-5 transition-all hover:scale-110"/>
                </button>
              </div>
            );
          })}

          {/* Upload Placeholder */}
          {uploadedFiles.length < 2 && (
            <label className="cursor-pointer w-[285px] h-[200px] flex flex-col gap-4 justify-center items-center rounded-lg bg-[#012619] border border-dashed border-gray-400">
              <input
                type="file"
                accept=".jpeg,.jpg,.png,.gif,.mp4,.webm,.ogg,.pdf,.doc,.docx"
                multiple
                className="hidden"
                onChange={handleFileUpload}
              />
              <img
                src="../images/Upload.svg"
                alt="Upload Placeholder"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col justify-center items-center text-white text-sm">
                <h2 className="name text-[15px]">Drag and drop a file</h2>
                <h2 className="name text-[15px]">Or</h2>
                <h2 className="text-blue-400 name">Browse</h2>
              </div>
            </label>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedFile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closePreview}
        >
          <div className="relative">
            {selectedFile.type === "image" && (
              <img
                src={selectedFile.url}
                alt="Preview"
                className="450:w-[65vw] w-[90vw] 450:h-[65vh] h-[50vh] rounded-lg object-contain"
              />
            )}
            {selectedFile.type === "video" && (
              <video
                src={selectedFile.url}
                controls
                className="450:w-[65vw] w-[90vw] 450:h-[65vh] h-[50vh] rounded-lg object-contain"
              />
            )}
            {/* Close Button */}
            <button
              onClick={closePreview}
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

export default AddPortfolio;
